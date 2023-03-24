import * as React from 'react'
import Moment from 'moment'

import attendance from '../../../attendance'
import { ParticipantWidget } from "../../../attendance/presets";

import update from 'immutability-helper';

import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import momentLocalizer from 'react-widgets-moment'
import 'react-widgets/dist/css/react-widgets.css'

import ageFactory from '../../../age'

momentLocalizer();


import {
    Button,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardImgOverlay
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'

export default class ParticipantsForm extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.add = this.add.bind(this);
        this.valid = this.valid.bind(this);
    }

    add(e) {
        this.props.add();
        e.preventDefault();
    }

    //I hope you like curry
    update(k) {
        return item => e => {
            this.props.updateValidation();
            const value = item === "days" ? parseInt(e.target.value) : e.target.value;
            this.props.update(k, item, value);
            e.preventDefault();
        }
    }

    updateDirect(k) {
        return item => value => {
            this.props.update(k, item, value);
        }
    }

    updateExtra(k) {
        return item => e => {
            this.props.updateValidation();
            const value = e.target.value;
            const participant = this.props.participants.find(p => p.id === k);
            const newExtra = update(participant.externalExtra || {}, { [item]: { $set: value } });
            this.props.update(k, 'externalExtra', newExtra);
            e.preventDefault();
        }
    }

    updateExtraCheck(k) {
        return item => e => {
            this.props.updateValidation();
            const participant = this.props.participants.find(p => p.id === k);
            const existing_value = !!participant.externalExtra[item]
            const newExtra = update(participant.externalExtra || {}, { [item]: { $set: !existing_value } });
            this.props.update(k, 'externalExtra', newExtra);
        }
    }


    updateExtraNoPrevent(k) {
        return item => e => {
            this.props.updateValidation();
            const value = e.target.value;
            const participant = this.props.participants.find(p => p.id === k);
            const newExtra = update(participant.externalExtra || {}, { [item]: { $set: value } });
            this.props.update(k, 'externalExtra', newExtra);
        }
    }

    updateAge(k) {
        return date => {
            this.props.updateValidation();
            this.props.update(k, "age", date);
        }
    }

    delete(k) {
        return (e) => {
            //@ts-ignore
            if (confirm("Are you sure you wish to remove this participant?")) this.props.delete(k);
            e.preventDefault();
        }
    }

    valid(item) {
        const valid = "";
        const invalid = "has-error";

        if (this.props.validating && (!item || item === "")) return invalid;
        return valid;
    }

    render() {

        const ageWidgets = ageFactory(this.props.event);

        const participants = this.props.participants;

        const AttendanceWidget = attendance[this.props.event.partialDates].ParticipantWidget;


        let rows = participants.map((p, i) => <ParticipantRow key={p.id}
            index={i}
            {...p}
            update={this.update(p.id)}
            updateAge={this.updateAge(p.id)}
            updateExtra={this.updateExtra(p.id)}
            updateExtraNoPrevent={this.updateExtraNoPrevent(p.id)}
            updateExtraCheck={this.updateExtraCheck(p.id)}
            updateDirect={this.updateDirect(p.id)}
            delete={this.delete(p.id)}
            valid={this.valid}
            event={this.props.event}
            AttendanceWidget={AttendanceWidget}
            env={this.props.env}
            ageWidgets={ageWidgets} />);
        return (<React.Fragment>
            {rows}
            <Row className="mb-3">
                <Col>
                    <Button color="info" onClick={this.add}>More People!</Button>
                </Col>
            </Row>
        </React.Fragment>
        )
    }
}

class ParticipantRow extends React.Component<any, any> {
    private readonly nameInput: React.RefObject<HTMLInputElement>;

    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
    }

    componentDidMount() {
        if (this.props.focus) {//@ts-ignore
            this.nameInput.current.focus();
        }
    }

    render() {

        const debugInfo = this.props.env === 'dev' ? <span
            style={{ color: 'red' }}>{'id: ' + this.props.id + ' updated: ' + Moment(this.props.updatedAt).format('YYYY-MM-DD')}</span> : null;

        //{this.props.validating ? this.props.name === "" || this.props.age === "" || this.props.diet === "" ? invalid : valid : valid}

        const attendance = <this.props.AttendanceWidget days={this.props.days} event={this.props.event}
            update={this.props.update("days")}
            updateDirect={this.props.updateDirect("days")} />;

        const basic_kp_questions = <FormGroup row>
            <Label sm={3}>Additional dietary requirement or food related allergies:</Label>
            <Col sm={9}>
                <Input type="textarea"
                    value={this.props.dietExtra || ''}
                    onChange={this.props.update("dietExtra")}
                    placeholder="N/A"
                    rows="3" />
            </Col>
        </FormGroup>

        const vcamp_kp_questions = <React.Fragment>
            <hr />
            <Row>
                <Col sm={12}><p>This year the KP team has expanded to make sure that we can cater to all diets and health conditions. The more accurate information that you can give us in this section, the easier it will be for both the central KP team and your village KPs
                </p></Col>
            </Row>
            <FormGroup row>
                <Label sm={6}>Go camp Veggie? If you would like to try out a Veggie or Vegan diet for this camp, go for it and choose that option here.:</Label>
                <Col sm={3}>

                    <Input type="select" value={this.props.diet || ''}
                        onChange={this.props.update("diet")}
                        vaild={this.props.valid(this.props.diet)}>
                        <option value="">Please Select</option>
                        <option value="omnivore">Omnivore</option>
                        <option value="pescetarian">Pescetarian</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                    </Input>
                </Col>
            </FormGroup>
            <Row>
                <Col sm={12}><p><b>Simple Dietary Requirements</b><br /> Please select all that apply:</p>
                </Col>
            </Row>
            <FormGroup row>
                <Col sm={{ size: 2 }}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={!!this.props.externalExtra.dairy}
                                onChange={this.props.updateExtraCheck('dairy')} />{' '}
                            Lactose/Dairy free
                        </Label>
                    </FormGroup>
                </Col>
                <Col sm={{ size: 2 }}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={!!this.props.externalExtra.soya}
                                onChange={this.props.updateExtraCheck('soya')} />{' '}
                            Soya free
                        </Label>
                    </FormGroup>
                </Col>
                <Col sm={{ size: 2 }}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={!!this.props.externalExtra.egg}
                                onChange={this.props.updateExtraCheck('egg')} />{' '}
                            Egg free
                        </Label>
                    </FormGroup>
                </Col>
                <Col sm={{ size: 2 }}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={!!this.props.externalExtra.gluten}
                                onChange={this.props.updateExtraCheck('gluten')} />{' '}
                            Gluten free
                        </Label>
                    </FormGroup>
                </Col>
                <Col sm={{ size: 2 }}>
                    <FormGroup check>
                        <Label check>
                            <Input disabled={this.props.diet === "vegan" || this.props.diet === "vegetarian" || this.props.diet === "pescetarian"} type="checkbox" checked={!!this.props.externalExtra.pork}
                                onChange={this.props.updateExtraCheck('pork')} />{' '}
                            Pork free
                        </Label>
                    </FormGroup>
                </Col>
                <Col sm={{ size: 2 }}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={!!this.props.externalExtra.nut}
                                onChange={this.props.updateExtraCheck('nut')} />{' '}
                            Nut free
                        </Label>
                    </FormGroup>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={12}><b>Food dislikes/preferences:</b><br />
                    E.g. “I really hate mushrooms”
                </Label>
                <Col sm={12}>
                    <Input type="textarea"
                        value={this.props.externalExtra.dietPreference || ''}
                        onChange={this.props.updateExtra("dietPreference")}
                        placeholder="N/A"
                        rows="3" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={12}><b>Any other dietary restrictions, allergies, intolerances or elimination diets:</b><br />
                    This is your everything else section for things that didn’t fit into the tick boxes above.</Label>
                <Col sm={12}>
                    <Input type="textarea"
                        value={this.props.dietExtra || ''}
                        onChange={this.props.update("dietExtra")}
                        placeholder="N/A"
                        rows="3" />
                </Col>
            </FormGroup>
            <FormGroup>
                <Col sm={{ size: 12 }}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={!!this.props.externalExtra.dietContactMe}
                                onChange={this.props.updateExtraCheck('dietContactMe')} />{' '}
                            <b>My allergies or dietary needs are complicated and I would like to be contacted by the Allergy kitchen team. </b>
                            The allergy kitchen team can provide partial or complete replacements of the main camp menu to meet the individual dietary needs
                        </Label>
                    </FormGroup>
                </Col>
            </FormGroup>
            <hr />
        </React.Fragment>

        const extra_kp = this.props.event.customQuestions.vcampKP ? vcamp_kp_questions : basic_kp_questions

        const basic_diet = this.props.event.customQuestions.vcampKP ? null : <React.Fragment><Label sm={1}>Diet:</Label>
            <Col sm={3}>

                <Input type="select" value={this.props.diet || ''}
                    onChange={this.props.update("diet")}
                    vaild={this.props.valid(this.props.diet)}>
                    <option value="">Please Select</option>
                    <option value="omnivore">Omnivore</option>
                    <option value="pescetarian">Pescetarian</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                </Input>
            </Col></React.Fragment>

        return (<Card id={`participant-${this.props.id}`} className="mb-3">
            <CardImg top src="/participant-header.jpg" alt="Card image cap" />
            <CardImgOverlay>
                <CardTitle style={{
                    marginTop: "-0.85em",
                    marginLeft: "-0.60em"
                }}>#{this.props.index + 1} {debugInfo}</CardTitle>
            </CardImgOverlay>
            <CardBody>
                <FormGroup row>
                    <Label sm={2}>Name:</Label>
                    <Col sm={10}>
                        <Input type="text"
                            value={this.props.name || ''}
                            onChange={this.props.update("name")}
                            vaild={this.props.valid(this.props.name)}
                            placeholder="Name"
                            innerRef={this.nameInput} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <this.props.ageWidgets.BookingFormWidget
                        age={this.props.age}
                        updateAge={this.props.updateAge}
                        valid={this.props.valid(this.props.age)}
                        event={this.props.event}
                    />
                    {basic_diet}
                </FormGroup>
                {extra_kp}
                <FormGroup row>
                    <Label sm={3}>Additional medical information &amp; medication taken:</Label>
                    <Col sm={9}>
                        <Input type="textarea"
                            value={this.props.medical || ''}
                            onChange={this.props.update("medical")}
                            placeholder="N/A"
                            rows="3" />
                    </Col>
                </FormGroup>
                <Over16Section event={this.props.event} age={this.props.age} values={this.props.externalExtra || {}}
                    update={this.props.updateExtra} />
                <PhotoConsent event={this.props.event} update={this.props.updateExtraNoPrevent} values={this.props.externalExtra || {}} id={this.props.id} />
                <VCampConsent event={this.props.event} update={this.props.updateExtraNoPrevent} values={this.props.externalExtra || {}} id={this.props.id} />
                <FormGroup row>
                    {attendance}
                    <Col sm={1}>
                        <Button onClick={this.props.delete} color="warning">
                            <span style={{ color: 'white' }}><FontAwesomeIcon icon={faTimes} /></span>
                        </Button>
                    </Col>
                </FormGroup>
            </CardBody>
        </Card>)
    }
}

const PhotoConsent = props => {
    if (!props.event.customQuestions.photoConsent) return null;

    return <FormGroup row>
        <Label sm={10}>I have permission for photographs, video and other media of this person to feature or be referred to on Woodcraft Folk social media, website and other publicity materials.</Label>
        <Col sm={2} className="pt-2">
            <FormGroup check inline key='yes'>
                <Label check>
                    <Input type="radio"
                        value='yes'
                        name={props.id+'photo'}
                        onChange={props.update('photoConsent')}
                        checked={props.values.photoConsent === 'yes'} />
                    Yes
                </Label>
            </FormGroup>
            <FormGroup check inline key='no'>
                <Label check>
                    <Input type="radio"
                        value='no'
                        name={props.id+'photo'}
                        onChange={props.update('photoConsent')}
                        checked={props.values.photoConsent === 'no'} />
                    No
                </Label>
            </FormGroup>
        </Col>
    </FormGroup>

};

const VCampConsent = props => {
    if (!props.event.customQuestions.vcampConsent) return null;

    return <React.Fragment>
        <hr />
        <FormGroup row>
            <Label sm={10}><b>Image Consent:</b><br />I have permission for photos and recordings to be taken at the event and used by Woodcraft Folk and external bodies for publications and during the event on-site.</Label>
            <Col sm={2} className="pt-2">
                <FormGroup check inline key='yes'>
                    <Label check>
                        <Input type="radio"
                            value='yes'
                            name={props.id+'photo'}
                            onChange={props.update('photoConsent')}
                            checked={props.values.photoConsent === 'yes'} />
                        Yes
                    </Label>
                </FormGroup>
                <FormGroup check inline key='no'>
                    <Label check>
                        <Input type="radio"
                            value='no'
                            name={props.id+'photo'}
                            onChange={props.update('photoConsent')}
                            checked={props.values.photoConsent === 'no'} />
                        No
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup>
        <hr />
        <FormGroup row>
            <Label sm={10}><b>Relations &amp; Sex Education Consent:</b><br />I have permission for this individual to take part in Relationship &amp; Sex Education workshops as part of Venturer Camp 2023. Everyone on camp will take part in a basic consent workshop, this consent is for content above and beyond that. (<a href="https://woodcraft.org.uk/resources/relationship-sex-education-policy/">policy</a>)</Label>
            <Col sm={2} className="pt-2">
                <FormGroup check inline key='yes'>
                    <Label check>
                        <Input type="radio"
                            value='yes'
                            name={props.id+'sre'}
                            onChange={props.update('sreConsent')}
                            checked={props.values.sreConsent === 'yes'} />
                        Yes
                    </Label>
                </FormGroup>
                <FormGroup check inline key='no'>
                    <Label check>
                        <Input type="radio"
                            value='no'
                            name={props.id+'sre'}
                            onChange={props.update('sreConsent')}
                            checked={props.values.sreConsent === 'no'} />
                        No
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup>
        <hr />
        <FormGroup row>
            <Label sm={10}><b>Adventurous Activities Consent:</b><br />I can confirm that this individual can swim 25m unaided</Label>
            <Col sm={2} className="pt-2">
                <FormGroup check inline key='yes'>
                    <Label check>
                        <Input type="radio"
                            value='yes'
                            name={props.id+'activity'}
                            onChange={props.update('activityConsent')}
                            checked={props.values.activityConsent === 'yes'} />
                        Yes
                    </Label>
                </FormGroup>
                <FormGroup check inline key='no'>
                    <Label check>
                        <Input type="radio"
                            value='no'
                            name={props.id+'activity'}
                            onChange={props.update('activityConsent')}
                            checked={props.values.activityConsent === 'no'} />
                        No
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup>
        <hr />
    </React.Fragment>
}

const Over16Section = props => {

    if (Moment(props.event.startDate).diff(Moment(props.age), 'years') > 15 && (props.event.customQuestions.adultEmail || props.event.customQuestions.adultFirstAid)) {
        const emailForm = props.event.customQuestions.adultEmail ? <React.Fragment>
            <Label sm={12}><b>Email address:</b><br />This will be used to check the membership status of the participant and for them to receive mailings about the camp. To opt out, contact info@venturercamp.org.uk</Label>
            <Col sm={7}>
                <Input type="email"
                    value={props.values.adultEmail || ''}
                    onChange={props.update("adultEmail")}
                    placeholder="e-mail address" />
            </Col>
        </React.Fragment> : null;

        const firstAidForm = props.event.customQuestions.adultFirstAid ? <React.Fragment>
            <Label sm={3}>Up to date first aid:</Label>
            <Col sm={2}>
                <Input type="select" value={props.values.adultFirstAid || ''}
                    onChange={props.update("adultFirstAid")}>
                    <option value='no'>No</option>
                    <option value="yes">Yes</option>
                </Input>
            </Col>
        </React.Fragment> : null;

        return (<FormGroup row>
            {emailForm}
            {firstAidForm}
        </FormGroup>)

    } else {
        return null
    }

};