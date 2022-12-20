import * as React           from 'react'
import Moment          from 'moment'
import Switch          from 'react-toggle'
import update          from 'immutability-helper';
import map             from 'lodash/map'
import attendance      from '../../attendance'
import OrgansationForm from './organisationForm'
import cloneDeep       from "lodash/cloneDeep";
import feeFactory      from '../../../shared/fee/feeFactory'
import {
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardImgOverlay
}                      from 'reactstrap';

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons/faLockOpen'


export default class EditForm extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {};
        // @ts-ignore
        this.state.event = this.props.event;
        // @ts-ignore
        this.state.delete = false;

        this.state.event.bookingPolicy = this.state.event.bookingPolicy || 'guest';
        this.state.event.partialDates = this.state.event.partialDates || 'whole';
        this.state.event.organisations = this.state.event.organisations || [];
        this.state.event.customQuestions = this.state.event.customQuestions || {};


        this.update = this.update.bind(this);
        this.updateData = this.updateData.bind(this);
        this.updateChecked = this.updateChecked.bind(this);
        this.updatePaymentOptions = this.updatePaymentOptions.bind(this);

        this.clickDeleteLock = this.clickDeleteLock.bind(this);
        this.clickDelete = this.clickDelete.bind(this);
        this.clickSave = this.clickSave.bind(this);
        this.updateExtra = this.updateExtra.bind(this);
        this.updateCustomChecked = this.updateCustomChecked.bind(this);
    }

    update(item) {
        return e => {
            this.setState(update(this.state, {event: {[item]: {$set: e.target.value}}}));
        }
    }

    updateData(item) {
        return data => {
            this.setState(update(this.state, {event: {[item]: {$set: data}}}));
        }
    }

    updateExtra(item) {
        return e => {
            this.setState(update(this.state, {event: {customQuestions: {[item]: {$set: e.target.value}}}}));
        }
    }

    updateChecked(item) {
        return e => {
            this.setState(update(this.state, {event: {[item]: {$set: e.target.checked}}}));
        }
    }

    updateCustomChecked(item) {
        return e => {
            this.setState(update(this.state, {event: {customQuestions: {[item]: {$set: e.target.checked}}}}));
        }
    }

    updatePaymentOptions(e) {
        this.setState(update(this.state, {event: {paymentTypes: {$set: e.target.value.split("\n")}}}));
    }

    clickDeleteLock(e) {
        this.setState({delete: !this.state.delete});
        e.preventDefault();
    }

    clickDelete(e) {
        this.props.deleteEvent({id: this.props.event.id});
        e.preventDefault();
    }

    clickSave(e) {
        const state = cloneDeep(this.state.event);
        state.organisations = state.organisations.map(o => {
            if (typeof o.id === "string") delete o.id;
            return o;
        }); //remove temp ids
        this.props.saveEvent(state);
        e.preventDefault();
    }

    render() {

        const feeOptions = [<option key={1} value="free">Free</option>,
            <option key={2} value="flat">Flat Fee</option>,
            <option key={3} value="ealing">Ealing Pricing Policy</option>,
            <option key={4} value="big">Big Camp Policy</option>,
            <option key={5} value="vcamp">VCamp Policy</option>,
            <option key={5} value="vcamp2023">VCamp 2023 Policy</option>,
            <option key={6} value="commonground">Common Ground Policy</option>];

        const attendanceOptions = map(attendance, a => <option value={a.name}
                                                               key={a.name + "key"}>{a.selection}</option>);

        const FeeConfig = feeFactory(this.state.event).Config;

        const AttendanceConfig = attendance[this.state.event.partialDates].Config;

        let attendanceFields: any = null;

        if (this.state.event.partialDates !== 'whole' && this.state.event.partialDates !== 'free') attendanceFields = (
            <FormGroup row>
                <Label sm={2}>Attendance Options:</Label>
                <Col sm={10}>
                    <AttendanceConfig data={this.state.event.partialDatesData}
                                      update={this.updateData('partialDatesData')}/>
                </Col>
            </FormGroup>);

        let paymentFields: any = null;
        let feeOptionFields: any = null;

        if (this.state.event.feeModel !== "free") {

            feeOptionFields = (
                <FormGroup row>
                    <Label sm={2}>Fee Options:</Label>
                    <Col sm={10}>
                        <FeeConfig event={this.state.event} fee={this.state.event.feeData}
                                   update={this.updateData('feeData')}/>
                    </Col>
                </FormGroup>);

            const options = this.state.event.paymentTypes.join("\n");
            paymentFields = (<React.Fragment>
                {formField("textarea", "Payment Options:", options, this.updatePaymentOptions)}
                {formField("textarea", "Payment Instructions:", this.state.event.paymentInfo, this.update("paymentInfo"))}
                {formField("textarea", "Payment Instructions (Annon):",  this.state.event.customQuestions.annonPayment, this.updateExtra("annonPayment"))}
            </React.Fragment>);
        }

        let organisationForm = this.state.event.organisationsEnabled ?

            <Row>
                <Col sm={2}>
                    <Label>Organisations:</Label>
                </Col>
                <Col sm={10}>
                    <OrgansationForm orgs={this.state.event.organisations} update={this.updateData('organisations')}/>
                </Col>
            </Row> : null;

        let deleteButtons = this.props.new ? null : [<Button key="deletelock"
                                                             type="submit"
                                                             disabled={!this.state.delete}
                                                             onClick={this.clickDelete}
                                                             className="float-right"
                                                             color="danger">
            Delete</Button>,
            <Button key="delete"
                    className="float-right mr-1"
                    type="submit"
                    color="danger"
                    onClick={this.clickDeleteLock}>
                <span style={{color: 'white'}}><FontAwesomeIcon icon={!this.state.delete ? faLockOpen : faLock}/></span>
            </Button>];


        return (<Row>
            <Col>
                <Form>
                    {formField("text", "Name:", this.state.event.name, this.update("name"), "Event Name")}
                    {formField("textarea", "Description:", this.state.event.description, this.update("description"))}
                    {formField("date", "Start Date:", Moment(this.state.event.startDate).format("YYYY-MM-DD"), this.update("startDate"))}
                    {formField("date", "End Date:", Moment(this.state.event.endDate).format("YYYY-MM-DD"), this.update("endDate"))}
                    {formField("date", "Booking Deadline:", Moment(this.state.event.bookingDeadline).format("YYYY-MM-DD"), this.update("bookingDeadline"))}
                    <FormGroup>
                        <Label>Booking Policy:</Label>
                        <Input type="select" value={this.state.event.bookingPolicy}
                               onChange={this.update('bookingPolicy')}>
                            <option value={'guest'} key={'guest'}>Guest</option>
                            <option value={'registered'} key={'registered'}>Registered</option>
                            <option value={'approved'} key={'approved'}>Approved</option>
                        </Input>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={2}>Big Camp Mode:</Label>
                        <Col xs={10} className="mt-1">
                            <Switch checked={!!this.state.event.bigCampMode}
                                    onChange={this.updateChecked('bigCampMode')}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={2}>Enable Organisations:</Label>
                        <Col xs={10} className="mt-1">
                            <Switch checked={!!this.state.event.organisationsEnabled}
                                    onChange={this.updateChecked('organisationsEnabled')}/>
                        </Col>
                    </FormGroup>
                    {organisationForm}
                    <FormGroup>
                        <Label>Attendance Policy:</Label>
                        <Input type="select" value={this.state.event.partialDates}
                               onChange={this.update('partialDates')}>
                            {attendanceOptions}
                        </Input>
                    </FormGroup>
                    {attendanceFields}
                    <FormGroup>
                        <Label>DoB Widget</Label>
                        <Input type="select" value={this.state.event.customQuestions.ageWidgets}
                               onChange={this.updateExtra('ageWidgets')}>
                            <option value='dob'>Date of Birth</option>
                            <option value='groupings'>Age group dropdown</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Fee Structure:</Label>
                        <Input type="select" value={this.state.event.feeModel} onChange={this.update('feeModel')}>
                            {feeOptions}
                        </Input>
                    </FormGroup>
                    {feeOptionFields}
                    {paymentFields}
                    {formField("text", "Extra Info Box Question", this.state.event.customQuestions.extraQuestion, this.updateExtra("extraQuestion"))}
                    {formField("textarea", "Extra Info Template:", this.state.event.customQuestions.extraTemplate, this.updateExtra("extraTemplate"))}
                    {formField("text", "Email Reply-to:", this.state.event.customQuestions.emailReply, this.updateExtra("emailReply"))}
                    {formField("text", "Managers Email Subject Tag:", this.state.event.customQuestions.emailSubjectTag, this.updateExtra("emailSubjectTag"))}
                    {switchGroup("Over 16 e-mail address", this.state.event.customQuestions.adultEmail, this.updateCustomChecked('adultEmail'))}
                    {switchGroup("Over 16 First-Aid question", this.state.event.customQuestions.adultFirstAid, this.updateCustomChecked('adultFirstAid'))}
                    {switchGroup("Central Food Opt Out", this.state.event.customQuestions.foodOptOut, this.updateCustomChecked('foodOptOut'))}
                    {switchGroup("Photo consent question", this.state.event.customQuestions.photoConsent, this.updateCustomChecked('photoConsent'))}
                    {switchGroup("VCamp complicated KP questions ", this.state.event.customQuestions.vcampKP, this.updateCustomChecked('vcampKP'))}
                    {switchGroup("VCamp complicated consent questions ", this.state.event.customQuestions.vcampConsent, this.updateCustomChecked('vcampConsent'))}
                    <Row>
                        <Col>
                            <Button color="success" onClick={this.clickSave}>Save</Button>
                            {deleteButtons}
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>);
    }
}

const formField = (type, label, value, update, placeholder: string | null = null) => (<FormGroup>
    <Label for={label}>{label}</Label>
    <Input type={type} name={label} placeholder={placeholder} value={value || ''} onChange={update}/>
</FormGroup>);

const switchGroup = (label, value, update) => (
    <FormGroup row>
        <Label xs={2}>{label}:</Label>
        <Col xs={10} className="mt-1">
            <Switch checked={!!value}
                    onChange={update}/>
        </Col>
    </FormGroup>
)