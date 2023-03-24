import * as React from 'react'
import BookingUserDetails from './bookingUserDetails'
import ParticipantForm from './participantsForm'
import PermissionForm from './permissionForm'
import FeeForm from './feeForm'
import PaymentForm from './paymentForm'
import FoodForm from './foodForm'
import AdditionalForm from './additionalContacts'
import cloneDeep from 'lodash/cloneDeep'
import update from 'immutability-helper';
import Moment from 'moment'
import uuid from 'uuid/v4';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons/faLockOpen'

import {
    Button,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Form,
    FormGroup,
} from 'reactstrap'
import { DebounceButton } from '../../../debounceButton'

//this is a massive component that handles the state of the booking form.

export default class BookingForm extends React.Component<any, any> {
    private readonly guest: boolean;
    private foodCounter: any;

    constructor(props) {
        super(props);

        this.guest = props.user && props.user.id === 1;

        this.state = {
            permission: false,
            new: !this.props.booking.id,
            deleteLock: true,
            validation: this.props.booking.id ? 4 : 0,
            deleteInProgress: false
        };

        this.updateItem = this.updateItem.bind(this);
        this.updateParticipantDetails = this.updateParticipantDetails.bind(this);
        this.updateExternalExtra = this.updateExternalExtra.bind(this);
        this.addParticipant = this.addParticipant.bind(this);
        this.deleteParticipant = this.deleteParticipant.bind(this);
        this.clickDeleteLock = this.clickDeleteLock.bind(this);
        this.clickDelete = this.clickDelete.bind(this);
        this.submit = this.submit.bind(this);
        this.updateValidation = this.updateValidation.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    updateItem(item, value) {
        //magic
        this.props.updateCurrentBooking(update(this.props.booking, { [item]: { $set: value } }))
    }

    updateParticipantDetails(id, item, value) {
        let participants = cloneDeep(this.props.booking.participants);

        const participant = participants.find(p => p.id === id);
        delete participant.focus;
        participant[item] = value;
        this.props.updateCurrentBooking(update(this.props.booking, { participants: { $set: participants } }));
    }

    updateExternalExtra(item, value) {
        this.props.updateCurrentBooking(update(this.props.booking, { externalExtra: { [item]: { $set: value } } }));
    }

    addParticipant() {

        this.props.updateCurrentBooking(update(this.props.booking, { participants: { $push: [blankParticipant(this.props.event)] } }));

    }

    deleteParticipant(id) {
        let participants = this.props.booking.participants;
        participants = participants.filter(p => p.id !== id);
        this.props.updateCurrentBooking(update(this.props.booking, { participants: { $set: participants } }));
    }

    submit(e) {
        const state = cloneDeep(this.props.booking);
        state.participants = state.participants.map(p => {
            if (typeof p.id === "string") delete p.id;
            return p;
        }); //remove temp ids from new participants

        this.props.submit(state, this.state.new ? true : (this.props.booking.userId === this.props.user.id));
        e.preventDefault();
    }

    clickDeleteLock(e) {
        this.setState({ deleteLock: !this.state.deleteLock });
        e.preventDefault();
    }

    clickDelete(e) {
        //@ts-ignore
        if (confirm('Are you sure you wish to delete this booking?')) {
            this.props.cancel(this.props.booking.id);
            this.setState({ deleteInProgress: true });
            e.preventDefault();
        }
    }

    //for a new booking we only trigger inline validations when the user has interacted with a subsequent section of the form.
    updateValidation(level) {
        return () => {
            if (level > this.state.validation) {
                this.setState(update(this.state, { validation: { $set: level } }));
                console.log("Validating level " + level);
            }
        };
    }

    //validate the booking state and return an array of errors for display, validation is also carried out in indvidual bits of the form,, hopefully they agree.
    validateBooking() {
        const results: [string?] = [];

        if (empty(this.props.booking.userName)) results.push("Please fill in your name");
        if (empty(this.props.booking.userEmail)) results.push("Please fill in your e-mail address");
        if (empty(this.props.booking.userContact)) results.push("Please fill in your contact phone number");
        if (this.props.event.bigCampMode && empty(this.props.booking.district)) results.push("Please fill in your group/district");

        if (this.props.booking.participants) this.props.booking.participants.forEach((p, k) => {
            p.externalExtra = p.externalExtra || {};
            if (empty(p.name)) {
                results.push("Participant #" + (k + 1) + " does not have a name");
                return;
            }
            if (empty(p.age)) results.push("Please fill in the age for " + p.name);
            if (empty(p.diet)) results.push("Please select a diet for " + p.name);
            if (Moment(this.props.event.startDate).diff(Moment(p.age), 'years') > 15 && this.props.event.customQuestions.adultEmail && empty(p.externalExtra.adultEmail)) results.push("Please fill an e-mail address for " + p.name);
            if (this.props.event.customQuestions.photoConsent && empty(p.externalExtra.photoConsent)) results.push("Please answer the photo consent for " + p.name)

            if (this.props.event.customQuestions.vcampConsent && empty(p.externalExtra.photoConsent)) results.push("Please answer the photo consent for " + p.name)
            if (this.props.event.customQuestions.vcampConsent && empty(p.externalExtra.sreConsent)) results.push("Please answer the relations and sex education consent consent for " + p.name)
            if (this.props.event.customQuestions.vcampConsent && empty(p.externalExtra.activityConsent)) results.push("Please answer the outdoor activities consent for " + p.name)
        });

        const lonePerson = this.props.booking.participants.filter(p => {
            return Moment(this.props.event.startDate).diff(Moment(p.age), 'years') > 15
        }
        ).length < 2;

        if (this.props.event.feeModel !== "free" && (!this.props.booking.paymentType || this.props.booking.paymentType === "")) results.push("Please choose a payment option");

        if ((!this.props.event.bigCampMode || lonePerson) && empty(this.props.booking.emergencyName)) results.push("Please provide an emergency contact name");
        if ((!this.props.event.bigCampMode || lonePerson) && empty(this.props.booking.emergencyPhone)) results.push("Please provide an emergency contact phone number");

        if (!this.props.booking.permission) results.push("Please tick the permission and data protection statement checkbox");

        if (needToAgreeDateChange(this.props.event, this.props.booking, this.props.user)) results.push("Please accept the date change notice")
        return results;
    }

    render() {

        const validationMessages = this.validateBooking();

        const deleteButtons = this.state.new ? null : [<Button key="deletelock"
            className="float-right ml-1"
            disabled={this.state.deleteLock || this.state.deleteInProgress}
            onClick={this.clickDelete}
            color="danger">Cancel
            Booking</Button>,
        <Button key="delete"
            color="danger"
            onClick={this.clickDeleteLock}
            className="float-right">
            <span style={{ color: 'white' }}><FontAwesomeIcon
                icon={this.state.deleteLock ? faLockOpen : faLock} /></span></Button>];

        const userDetails = {
            userName: this.props.booking.userName,
            userEmail: this.props.booking.userEmail,
            userContact: this.props.booking.userContact,
            district: this.props.booking.district,
            organisationId: this.props.booking.organisationId,
            bookingId: this.props.booking.id
        };

        const permissionDetails = {
            emergencyName: this.props.booking.emergencyName,
            emergencyPhone: this.props.booking.emergencyPhone,
            note: this.props.booking.note,
            permission: this.props.booking.permission,
            campWith: this.props.booking.campWith
        };

        return (<Form autoComplete="off">
            <Row>
                <Col>
                    <h3 onClick={this.foodCounter}>Your Details</h3>
                    <p>We will use these if we need to get in touch</p>
                </Col>
            </Row>
            <BookingUserDetails
                user={this.props.user}
                event={this.props.event}
                organisations={this.props.organisations}
                update={this.updateItem}
                guest={this.guest}
                validating={this.state.validation > 0} {...userDetails} />
            {this.props.event.bigCampMode ? <AdditionalForm
                booking={this.props.booking}
                update={this.updateExternalExtra} /> : null}
            {this.props.event.customQuestions.foodOptOut ? <FoodForm
                booking={this.props.booking}
                update={this.updateExternalExtra} /> : null}
            <Row>
                <Col>
                    <h3>Participants</h3>
                    <p>Please fill out for every person attending (including yourself if applicable)</p>
                </Col>
            </Row>
            <ParticipantForm participants={this.props.booking.participants}
                event={this.props.event}
                update={this.updateParticipantDetails}
                add={this.addParticipant}
                delete={this.deleteParticipant}
                validating={this.state.validation > 1}
                updateValidation={this.updateValidation(1)}
                env={this.props.env}
            />
            <Row className="mb-3">
                <Col>
                    <h3>Money</h3>
                </Col>
            </Row>
            <FeeForm event={this.props.event} participants={this.props.booking.participants}
                booking={this.props.booking} />
            {this.props.event.feeModel === "free" ? null :
                <PaymentForm update={this.updateItem}
                    event={this.props.event}
                    booking={this.props.booking}
                    chosen={this.props.booking.paymentType}
                    validating={this.state.validation > 2}
                    updateValidation={this.updateValidation(2)} />}
            <Row className="mb-3">
                <Col>
                    <h3>Responsibility</h3>
                </Col>
            </Row>
            <PermissionForm event={this.props.event}
                booking={this.props.booking}
                user={this.props.user}
                update={this.updateItem}
                validating={this.state.validation > 3}
                {...permissionDetails}
                updateValidation={this.updateValidation(4)} />
            <Row>
                <Col>
                    <h3>Submit</h3>
                    <p>When you have finished click here to submit your booking. You can always come back and edit it
                        before the deadline.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    {needToAgreeDateChange(this.props.event, this.props.booking, this.props.user) ? <DateChangePanel
                        updateExternalExtra={this.updateExternalExtra} /> : null}
                    <br />
                    <ValidationList errors={validationMessages} />
                </Col>
            </Row>
            <FormGroup row>
                <Col>
                    <DebounceButton disabled={validationMessages.length !== 0}
                        color="success"
                        onClick={this.submit}>Submit Booking
                    </DebounceButton>
                    {this.state.new ? null : deleteButtons}
                </Col>
            </FormGroup>
        </Form>)
    }
}

const ValidationList = (props) => {
    if (props.errors.length === 0) return null;

    const items = props.errors.map(e => <li key={e}>{e}</li>);

    return (<Card className="mb-3" body outline color="warning">
        <CardTitle>Still to do:</CardTitle>
        <ul>{items}</ul>
    </Card>);

};

function empty(value) {
    return !value || value === ""
}

//bad bad bad should be based on model.
let tempkey = 1000;

function blankParticipant(event) {
    return {
        id: uuid(),
        name: '',
        age: '',
        diet: '',
        dietExtra: '',
        medical: '',
        days: event.partialDates !== 'presets' ? 2 ** (Moment(event.endDate).diff(Moment(event.startDate), 'days') + 1) - 1 : event.partialDatesData[0].mask,
        externalExtra: {},
        internalExtra: {},
        focus: true
    }
}

const needToAgreeDateChange = (event, booking, user) => {
    if (!event.customQuestions.invalidDate) return false
    if (user.id !== booking.userId) return false
    if (Moment().isBefore(event.customQuestions.invalidDate)) return false
    return !booking.externalExtra.agreedDateChange
}

const DateChangePanel = (props) => {

    return <Card body outline color="danger" className="mb-3">
        <CardTitle>
            Common Ground Date Change Scary Warning Box
        </CardTitle>
        <CardBody>

            <p>I agree this booking is now for Common Ground in 2022 and totally promise to get it up to date at some point.</p>
            <Button color="primary" onClick={() => {
                props.updateExternalExtra('agreedDateChange', true);
            }}>Accept</Button>
        </CardBody>
    </Card>

}



