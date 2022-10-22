import * as React from 'react'
import {connect} from 'react-redux'

import {Route, Switch} from 'react-router-dom';
import {viewBookingCheck, loggedInCheck} from '../permission'
import {getBooking} from '../actions'
import * as bookings from "../index";

//load an individual booking so we can edit it, this will check we have permission to VIEW this booking.

class BookingLoader extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getBooking(this.props.match.params.bookingId);
    }

    render() {

        if (this.props.Booking === undefined) return <div>Loading Data</div>;
        return <Switch>
            <Route exact path="/booking/:bookingId(\d+)/edit" component={viewBookingCheck(bookings.editPage)}/>)
        </Switch>
    }
}


const mapStateToProps = (state, props) => {

    const Booking = state.getIn(["Bookings", "bookings", parseInt(props.match.params.bookingId)]);
    //const Bookings = state.getIn(["Bookings","bookings"]).filter(b => b.get("eventId") === Event.get("id")).toList();
    //const Participants = Bookings.reduce((r, b) => r.concat(b.get("participants")), Immutable.List());//just easier to do this here than find a plain javascript object map function
    return {Booking};
};

const mapDispatchToProps = {
    getBooking: getBooking,
};

const VisibleBookingLoader = connect(
    mapStateToProps,
    mapDispatchToProps
)(loggedInCheck(BookingLoader));

export default VisibleBookingLoader;

