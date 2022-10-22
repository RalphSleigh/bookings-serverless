import {connectedRouterRedirect,} from 'redux-auth-wrapper/history4/redirect'
import {withRouter} from 'react-router'

import * as P from '../../shared/permissions'

export const loggedInCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {
        const user = state.getIn(["User", "user"]).toJS();
        return user.id !== 1;
        },
    redirectPath: "/user",
    wrapperDisplayName: "View Booking check"
});

export const viewBookingCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {
        //if (props.booking === undefined) return true;
        const user = state.getIn(["User", "user"]).toJS();
        const Booking = state.getIn(["Bookings", "bookings", parseInt(props.match.params.bookingId)]);
        if(!Booking) return false;
        const booking = Booking.toJS();
        booking.event = state.getIn(["Events", "events", booking.eventId]).toJS();
        return P.viewBooking(user, booking);
    },
    redirectPath: "/user",
    wrapperDisplayName: "View Booking check"
});

export const applyEventCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {
        const Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
        const User = state.getIn(["User", "user"]);
        return P.applyToBookEvent(User.toJS(), Event.toJS());
    },
    redirectPath: (state, props) => {
        if (state.getIn(["User", "user", "applications"]).find(a => a.get("eventId") === props.match.params.eventId))
            return '/event/' + props.match.params.eventId + '/apply/thanks';
        else return '/';
    },
    wrapperDisplayName: "Apply To Book check"
});

export const bookEventCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {

        const User = state.getIn(["User", "user"]);
        const Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);

        const user = User.toJS();
        const event = Event.toJS();
        return P.bookEvent(user, event);
    },
    redirectPath: "/user",
    wrapperDisplayName: "Create Event Check"
});

export const editBookingCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {
        //called from /booking/1/edit
        const User = state.getIn(["User", "user"]);
        const Booking = state.getIn(["Bookings", "bookings", parseInt(props.match.params.bookingId)]);
        const Event = state.getIn(["Events", "events", Booking.get("eventId")]);

        const user = User.toJS();
        const event = Event.toJS();
        const booking = Booking.toJS();

        return P.editBooking(user, event, booking);
    },
    redirectPath: "/user",
    wrapperDisplayName: "Create Event Check"
});