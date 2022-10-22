import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Moment from 'moment'


import EventForm from './eventForm'
import { createEventCheck } from '../permission'
import { createEvent } from '../actions'

import {
    Row,
    Col
} from 'reactstrap';

class CreatePage extends React.Component<any, any> {

	constructor(props) {
		super(props);

		this.saveEvent = this.saveEvent.bind(this);
	}

	saveEvent(e) {
		this.props.createEvent(e);
	}

	render() {
		//const data = this.props.user.toObject();

		let event = {
			id: null,
			name: '',
			description: '',
			startDate: Moment().format("YYYY-MM-DD"),
			endDate: Moment().format("YYYY-MM-DD"),
			bookingDeadline: Moment().format("YYYY-MM-DD"),
			allowGuestBookings: false,
			feeModel: "free",
			feeData: {},
			paymentTypes: ["Cash", "Cheque", "Bank Transfer"],
			paymentInfo: ""
        };

        return (<React.Fragment>
            <Row>
                <Col>
                    <h3>New Event</h3>
                </Col>
            </Row>
            <EventForm event={event} new={true} saveEvent={this.saveEvent}/>
        </React.Fragment>);
	}
}

const mapStateToProps = (state) => {
	//var Events = state.getIn(["Data","Events"]);
	// return {Events};
	return {}
}

const mapDispatchToProps = { createEvent };

var VisibleCreatePage = connect(
	mapStateToProps,
	mapDispatchToProps
)(createEventCheck(CreatePage));

export default VisibleCreatePage;