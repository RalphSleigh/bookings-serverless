import * as React from 'react'
import Moment from 'moment'

import attendance from '../../../attendance'
import {ParticipantWidget} from "../../../attendance/presets";

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

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/free-solid-svg-icons/faTimes'

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
            const newExtra = update(participant.externalExtra || {}, {[item]: {$set: value}});
            this.props.update(k, 'externalExtra', newExtra);
            e.preventDefault();
        }
    }

    updateExtraNoPrevent(k) {
        return item => e => {
            this.props.updateValidation();
            const value = e.target.value;
            const participant = this.props.participants.find(p => p.id === k);
            const newExtra = update(participant.externalExtra || {}, {[item]: {$set: value}});
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
                                                              updateDirect={this.updateDirect(p.id)}
                                                              delete={this.delete(p.id)}
                                                              valid={this.valid}
                                                              event={this.props.event}
                                                              AttendanceWidget={AttendanceWidget}
                                                              env={this.props.env}
                                                              ageWidgets={ageWidgets}/>);
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
            style={{color: 'red'}}>{'id: ' + this.props.id + ' updated: ' + Moment(this.props.updatedAt).format('YYYY-MM-DD')}</span> : null;

        //{this.props.validating ? this.props.name === "" || this.props.age === "" || this.props.diet === "" ? invalid : valid : valid}

        const attendance = <this.props.AttendanceWidget days={this.props.days} event={this.props.event}
                                                        update={this.props.update("days")}
                                                        updateDirect={this.props.updateDirect("days")}/>;

        return (<Card id={`participant-${this.props.id}`} className="mb-3">
            <CardImg top src="/participant-header.jpg" alt="Card image cap"/>
            <CardImgOverlay>
                <CardTitle style={{
                    marginTop:  "-0.85em",
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
                               innerRef={this.nameInput}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <this.props.ageWidgets.BookingFormWidget
                        age={this.props.age}
                        updateAge={this.props.updateAge}
                        valid={this.props.valid(this.props.age)}
                        event={this.props.event}
                    />
                    <Label sm={1}>Diet:</Label>
                    <Col sm={3}>

                        <Input type="select" value={this.props.diet || ''}
                               onChange={this.props.update("diet")}
                               vaild={this.props.valid(this.props.diet)}>
                            <option value="">Please Select</option>
                            <option value="omnivore">Omnivore</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3}>Additional dietary requirement or food related allergies:</Label>
                    <Col sm={9}>
                        <Input type="textarea"
                               value={this.props.dietExtra || ''}
                               onChange={this.props.update("dietExtra")}
                               placeholder="N/A"
                               rows="3"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3}>Additional medical information &amp; medication taken:</Label>
                    <Col sm={9}>
                        <Input type="textarea"
                               value={this.props.medical || ''}
                               onChange={this.props.update("medical")}
                               placeholder="N/A"
                               rows="3"/>
                    </Col>
                </FormGroup>
                <Over16Section event={this.props.event} age={this.props.age} values={this.props.externalExtra || {}}
                               update={this.props.updateExtra}/>
                <PhotoConsent event={this.props.event} update={this.props.updateExtraNoPrevent}  values={this.props.externalExtra || {}} id={this.props.id}/>
                <FormGroup row>
                    {attendance}
                    <Col sm={1}>
                        <Button onClick={this.props.delete} color="warning">
                            <span style={{color: 'white'}}><FontAwesomeIcon icon={faTimes}/></span>
                        </Button>
                    </Col>
                </FormGroup>
            </CardBody>
        </Card>)
    }
}

const PhotoConsent = props => {
  if(!props.event.customQuestions.photoConsent) return null;

    return <FormGroup row>
        <Label sm={10}>I have permission for photographs, video and other media of this person to feature or be referred to on Woodcraft Folk social media, website and other publicity materials.</Label>
        <Col sm={2} className="pt-2">
            <FormGroup check inline key='yes'>
                <Label check>
                    <Input type="radio"
                           value='yes'
                           name={props.id}
                           onChange={props.update('photoConsent')}
                           checked={props.values.photoConsent === 'yes'}/>
                    Yes
                </Label>
            </FormGroup>
            <FormGroup check inline key='no'>
                <Label check>
                    <Input type="radio"
                           value='no'
                           name={props.id}
                           onChange={props.update('photoConsent')}
                           checked={props.values.photoConsent === 'no'}/>
                    No
                </Label>
            </FormGroup>
        </Col>
    </FormGroup>

};

const Over16Section = props => {

    if (Moment(props.event.startDate).diff(Moment(props.age), 'years') > 15 && (props.event.customQuestions.adultEmail || props.event.customQuestions.adultFirstAid)) {
        const emailForm = props.event.customQuestions.adultEmail ? <React.Fragment>
            <Label sm={3}>Email address used for WCF membership:</Label>
            <Col sm={4}>
                <Input type="email"
                       value={props.values.adultEmail || ''}
                       onChange={props.update("adultEmail")}
                       placeholder="e-mail address"/>
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