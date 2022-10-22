import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import * as event from '../../events'
import BookingForm from './form/bookingForm'
import ParticipantQuickList from './participantQuickList'
import { updateQuickList, createBooking } from '../actions'


class CreatePage extends React.Component<any, any> {

	constructor(props) {
		super(props);

	}

	render() {

		if (this.props.Event === undefined) return null;

		const event = this.props.Event.toJS();
		const user = this.props.User.toJS();
		const quickList = this.props.QuickList.toJS();
		//const data = this.props.user.toObject();
		return (<div>
			<div className="row" style={{ display: "flex" }}>
				<div className="col-sm-12 col-md-10">
					<h3>Booking for {event.name}</h3>
					<div className="row">
						<BookingForm user={user} event={event} submit={this.props.createBooking} updateQuickList={this.props.updateQuickList} />
					</div>
				</div>
				<ParticipantQuickList quickList={quickList} />
			</div>
		</div>
		)
	}


	componentWillMount() {
		if (this.props.Event === undefined) this.props.getEvent(this.props.match.params.eventId);
	}
}

const mapStateToProps = (state, props) => {
    let User = state.getIn(["User", "user"]);
    let Event = state.getIn(["Events", "event", parseInt(props.match.params.eventId)]);
	let QuickList = state.getIn(["Bookings", "quickList"]);
	return { User, Event, QuickList }
}

const getEvent = event.actions.getEvent
const mapDispatchToProps = { getEvent, updateQuickList, createBooking };

var VisibleCreatePage = connect(
	mapStateToProps,
	mapDispatchToProps
)(CreatePage);

export default VisibleCreatePage;