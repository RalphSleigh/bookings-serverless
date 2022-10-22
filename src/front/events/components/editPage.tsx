import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EventForm from './eventForm'

import { getEvent, saveEvent, deleteEvent } from '../actions'
import { editEventCheck } from '../permission'

import {
    Row,
    Col
} from 'reactstrap';

class EditPage extends React.Component<any, any> {

	render() {
		if (this.props.Event === undefined) return null;

		let event = this.props.Event.toJS();
		//const data = this.props.user.toObject();

        return (<React.Fragment>
            <Row>
                <Col>
                    <h3>Edit Event - {event.name}</h3>
                </Col>
            </Row>
            <EventForm event={event} saveEvent={this.props.saveEvent} deleteEvent={this.props.deleteEvent}/>
        </React.Fragment>);

	}
}

const mapStateToProps = (state, props) => {
    var Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
	return { Event }
}

const mapDispatchToProps = { getEvent, saveEvent, deleteEvent };

var VisibleEditPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(editEventCheck(EditPage));

export default VisibleEditPage;

