import * as React from 'react'
import Moment from 'moment'
import update from 'immutability-helper';

import {
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardTitle,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.ts'

import ReactMarkdown from "react-markdown"
import { DebounceButton } from '../../debounceButton';

export default class Applications extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {organisations: {}, notes: {}};

        const event = this.props.Event.toJS();

        (event.applications || []).map(a => {
            this.state.notes[a.id] = a.message;
            console.log(a.messsage)
        });

        this.approve = this.approve.bind(this);
        this.decline = this.decline.bind(this);
        this.setOrganisation = this.setOrganisation.bind(this);
        this.updateNote = this.updateNote.bind(this);
    }

    approve(id) {
        return e => {
            let org = this.state.organisations[id];
            org = parseInt(org) ? parseInt(org) : null; //cast undefined/"any" to null, string from event to number
            this.props.approve(id, org, this.state.notes[id]);
            e.preventDefault()
        }
    }

    decline(id) {
        return e => {
            this.props.decline(id);
            e.preventDefault();

        }
    }

    setOrganisation(id) {
        return e => {
            this.setState(update(this.state, {organisations: {[id]: {$set: e.target.value}}}));
            e.preventDefault()
        }
    }

    updateNote(id) {
        return e => {
            this.setState(update(this.state, {notes: {[id]: {$set: e.target.value}}}));
            e.preventDefault()
        }
    }

    render() {

        const event = this.props.Event.toJS();

        const apps = (event.applications || []).map(a => <ApplicationRow
            key={a.id}
            application={a}
            event={event}
            organisation={this.state.organisations[a.id]}
            note={this.state.notes[a.id]}
            approve={this.approve(a.id)}
            decline={this.decline(a.id)}
            setOrganisation={this.setOrganisation(a.id)}
            updateNote={this.updateNote(a.id)}
        />);

        return (<div>
            <h4>Approve or decline applications to book:</h4>
            {apps}
        </div>)
    }
}

const ApplicationRow = props => {

    let approveText: any = null;

    if (props.event.organisationsEnabled) {

        const options = props.event.organisations.map(o => <option key={o.id} value={o.id}>{o.name}</option>);

        approveText = <FormGroup>
            <Label>Approve user to book into Organisation:</Label>
            <Input type="select" id="orgSelect" value={props.organisation || 'any'}
                   onChange={props.setOrganisation}>
                {options}
            </Input>
        </FormGroup>

    } else {
        approveText = <p>Approve user to book into this event:</p>
    }

    return (<Card className="mb-1">
        <CardBody>
            <CardTitle>
                <b>{props.application.user.userName}</b> ({props.application.user.email})
                - {Moment(props.application.createdAt).fromNow()}
            </CardTitle>
            <Row>
                <Col sm={7}>
                    <ReactMarkdown  children={props.application.message}/>
                </Col>
                <Col sm={5}>
                    {approveText}
                    <FormGroup>
                        <Label>
                            Note:
                        </Label>

                            <Input
                                type="textarea"
                                rows={7}
                                value={props.note || ''}
                                onChange={props.updateNote}
                            />

                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <DebounceButton color="success" onClick={props.approve}>Approve
                            </DebounceButton>
                            <DebounceButton color="danger" className="ml-2" onClick={props.decline}>Decline
                            </DebounceButton>
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
        </CardBody>
    </Card>);
/*
    return (<div className="col-sm-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title"><b>{props.application.user.userName}</b> ({props.application.user.email})
                        - {Moment(props.application.createdAt).fromNow()}</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-7"><p>{props.application.message}</p></div>
                        <div className="col-sm-5">
                            {approveText}
                            <div className="btn-toolbar float-right">
                                <button type="submit" className="btn btn-success" onClick={props.approve}>Approve
                                </button>
                                <button type="submit" className="btn btn-danger" onClick={props.decline}>Decline
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    */
};


