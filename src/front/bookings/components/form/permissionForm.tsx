import * as React from 'react'

import {
    Row,
    Col,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import Moment from "moment";

export default class PermissionForm extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.updatePermission = this.updatePermission.bind(this);
        this.updateEmergency = this.updateEmergency.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.updateCampWith = this.updateCampWith.bind(this);
    }

    updatePermission() {
        this.props.updateValidation();
        this.props.update('permission', !this.props.permission);
    }

    updateEmergency(item) {
        return (e) => {
            this.props.updateValidation();
            this.props.update(item, e.target.value)
            e.preventDefault();
        }
    }

    updateCampWith(e) {
        this.props.updateValidation();
        this.props.update('campWith', e.target.value);
        e.preventDefault();
    }

    updateNote(e) {
        this.props.updateValidation();
        this.props.update('note', e.target.value);
        e.preventDefault();
    }

    valid(item) {
        if (this.props.validating && (!item || item === "")) return false;
        return null;
    }

    render() {

        const valid = "form-group";
        const invalid = "form-group has-error";

        const customQuestions = this.props.event.customQuestions || {};

        const lonePerson = this.props.booking.participants.filter(p => {
                return Moment(this.props.event.startDate).diff(Moment(p.age), 'years') > 15
            }
        ).length < 2;


        const emergency = !this.props.event.bigCampMode || lonePerson ?
            <React.Fragment>
                <Row>
                    <Col>
                        <h4>Emergency Contact</h4>
                        {lonePerson ? <p>As you have only booked in one adult, please provide some emergency contact details of someone not attending the event</p> : <p>Please provide details of someone we can contact in case of an emergency during the event (a
                            second
                            person is better even if you are not attending yourself)</p>}
                    </Col>
                </Row>
                <FormGroup row>
                    <Label sm={2}>
                        Name:
                    </Label>
                    <Col sm={10}>
                        <Input type="text"
                               placeholder="Name"
                               value={this.props.emergencyName || ''}
                               valid={this.valid(this.props.emergencyName)}
                               onChange={this.updateEmergency("emergencyName")}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>
                        Phone:
                    </Label>
                    <Col sm={10}>
                        <Input type="text"
                               placeholder="Phone number"
                               value={this.props.emergencyPhone || ''}
                               valid={this.valid(this.props.emergencyPhone)}
                               onChange={this.updateEmergency("emergencyPhone")}/>
                    </Col>
                </FormGroup>
            </React.Fragment> : null;


        const campWith = this.props.event.bigCampMode ?

            <FormGroup row>
                <Label sm={12}>
                    Are there other groups you are planning to or would like to camp with?
                </Label>
                <Col sm={{size: 10, offset: 2}}>
                    <Input type="textarea"
                           value={this.props.campWith || ''}
                           onChange={this.updateEmergency("campWith")}/>
                </Col>
            </FormGroup> : null;

        return (<React.Fragment>
            {emergency}
            <Row>
                <Col>
                    <h4>Additional Information</h4>
                </Col>
            </Row>
            <FormGroup row>
                <Label sm={12}>
                    {customQuestions.extraQuestion ? customQuestions.extraQuestion : 'Anything else we need to know?:'}
                </Label>
                <Col sm={{size: 10, offset: 2}}>
                    <Input type="textarea"
                           placeholder=""
                           value={this.props.note || customQuestions.extraTemplate || ''}
                           onChange={this.updateNote}
                           rows={6}/>
                </Col>
            </FormGroup>
            {campWith}
            <Row>
                <Col>
                    <h4>Permission</h4>
                </Col>
            </Row>
            <FormGroup row>
                <Col sm={{size: 10, offset: 2}}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={!!this.props.permission}
                                   onChange={this.updatePermission}/>{' '}
                            I give permission for the people named above to
                            attend {this.props.event.name}.<br/><br/>
                            I acknowledge it is my responsibility to ensure everyone over 16 attending has up-to-date
                            Woodcraft Folk membership and completed a DBS check.
                            <br/><br/>
                            I agree this information will be stored electronically and shared only with individuals who need this information to
                            engage your child safely in Woodcraft Folk activities. Based on the needs of your child we may also share any relevant
                            information with medical or child protection professionals. For more information please visit
                            <a href="https://woodcraft.org.uk/privacy"> www.woodcraft.org.uk/privacy</a> or contact <a
                            href="mailto:data@woodcraft.org.uk">data@woodcraft.org.uk</a>
                        </Label>
                    </FormGroup>
                </Col>
            </FormGroup>
        </React.Fragment>);
    }
}