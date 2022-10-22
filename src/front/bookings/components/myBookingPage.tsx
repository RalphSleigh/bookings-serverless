import * as React from 'react'
import {connect} from 'react-redux'

import * as event from '../../events'
import BookingForm from './form/bookingForm'
import ParticipantQuickList from './participantQuickList'
import {
    updateQuickList,
    createBooking,
    getUserBookings,
    saveBooking,
    cancelBooking,
    updateCurrentBooking
} from '../actions'

import {bookEventCheck}       from '../permission'
import {bookIntoOrganisation} from '../../../shared/permissions'
import Moment                 from "moment/moment";
import uuid                   from 'uuid/v4';

import {
    Row,
    Col,
} from 'reactstrap';

import { storageFactory } from "storage-factory";
const local = storageFactory(() => localStorage);


//this is the special case where we are doing the sessions own booking for the event. If we have previously booked then edit that instead of letting them create a new one.  

//TODO: do we have permission?

class MyBookingPage extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {

        const event = this.props.Event.toJS();
        const user = this.props.User.toJS();
        const booking = this.props.Booking.toJS ? this.props.Booking.toJS() : this.props.Booking;
        const organisations = event.organisations.filter(o => bookIntoOrganisation(user, event, booking, o));

        booking.externalExtra = booking.externalExtra || {};

        const form =
            <BookingForm user={user}
                         event={event}
                         booking={booking}
                         organisations={organisations}
                         submit={booking.id ? (booking) => this.props.saveBooking(booking, true) : this.props.createBooking}
                         updateCurrentBooking={this.props.updateCurrentBooking} cancel={this.props.cancelBooking}
                         env={this.props.env}/>;

        return (<Row>
            <Col xs={12} sm={12} md={10}>
                <h3>Booking for {event.name}</h3>
                {form}
            </Col>
            <ParticipantQuickList booking={booking} event={event}/>
        </Row>);
    }
}

const mapStateToProps = (state, props) => {
    const eventId = parseInt(props.match.params.eventId)
    let User = state.getIn(["User", "user"]);
    let Event = state.getIn(["Events", "events", eventId]);

    const event = Event.toJS();

    //find the booking, sources:
    //1) currentBooking if set and for this user/event,
    //2) Pre-existing booking in the bookings map
    //3) Booking in localstorage
    //4) empty booking

    const Bookings = state.get("Bookings");

    let currentBooking = Bookings.get("currentBooking");

    if (currentBooking && (currentBooking.get("eventId") !== Event.get("id") || currentBooking.get("userId") !== User.get("id"))) currentBooking = null;

    const existingBooking = state.getIn(["Bookings", "bookings"]).find(b => b.get("userId") === User.get("id") && b.get("eventId") === Event.get("id"))
    //@ts-ignore
    const localData = local.getItem('currentBooking') ? JSON.parse(local.getItem('currentBooking')) : false;

    const localBooking = (localData &&
        (localData.eventId === Event.get("id")) &&
        (localData.userId === User.get("id"))) ? localData : false;

    const prevBooking = (Event, Bookings, User) => {

        if(Event.get("bigCampMode") === false) return null

        let prevBooking = Bookings.get("bookings")
            .filter(b => b.get("userId") === User.get("id"))
            .filter(b => Moment(b.get('createdAt')).year() === Moment().year())
            .toList()
            .sort((a, b) => a.get('participants').size < b.get('participants').size)
            .get(0)

        if (prevBooking) {
            prevBooking = prevBooking.set("eventId", Event.get("id"))
                .delete("id")
                .delete("note")
                .delete('createdAt')
                .delete('updatedAt')
                .set('participants', prevBooking.get("participants").map(p => p.set("id", uuid()).delete("bookingId").set('days', event.partialDates !== 'partial' ? 2 ** (Moment(event.endDate).diff(Moment(event.startDate), 'days') + 1) - 1 : event.partialDatesData[0].mask,
            ))
                .delete('createdAt')
                .delete('updatedAt'));

            return prevBooking
        } else {
            return null
        }
    };

    let Booking = currentBooking || existingBooking || localBooking || prevBooking(Event, Bookings, User) || emptyBooking(User, Event);

    const Env = state.get("App");

    return {User, Event, Booking, Env}
};

const emptyBooking = (User, Event) => {
    const event = Event.toJS();
    const booking = {
        userId: User.get("id"),
        eventId: Event.get("id"),
        userName: User.get("id") === 1 ? '' : User.get("userName"),
        userEmail: User.get("id") === 1 ? '' : User.get("email") ? User.get("email") : '',
        participants: [{
            id:            uuid(),
            name:          '',
            age:           '',
            diet:          '',
            days:          event.partialDates !== 'partial' ? 2 ** (Moment(event.endDate).diff(Moment(event.startDate), 'days') + 1) - 1 : event.partialDatesData[0].mask,
            externalExtra: {},
            internalExtra: {}
        }],
        externalExtra: {},
        internalExtra: {},
        organisationId: undefined
    };

    if (Event.get("organisationsEnabled")){
        const bookRole = User.get('roles').toJS().find(r => r.name === 'book' && r.eventId === Event.get("id"));
        const orgId = (bookRole && bookRole.organisationId) ? bookRole.organisationId : Event.getIn(['organisations', 0, 'id']);
        booking.organisationId = orgId;
    }

    return booking;
};

const getEvent = event.actions.getEvent;
const mapDispatchToProps = {
    getEvent,
    updateQuickList,
    createBooking,
    getUserBookings,
    saveBooking,
    cancelBooking,
    updateCurrentBooking
};

const VisibleMyBookingPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyBookingPage);

export default bookEventCheck(VisibleMyBookingPage);