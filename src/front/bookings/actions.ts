//import Immutable from 'immutable'
import fetch from '../fetch'
import {push} from 'react-router-redux'
import {updateUser} from '../user/actions'

import { storageFactory } from "storage-factory";//@ts-ignore
const local = storageFactory(() => localStorage);

//import m from '../messages'


/*
export const saveEvent = event => {
	return (dispatch) => {
		fetch('/api/event/edit',"POST",event)
		.then(j => {
			dispatch(updateEvent(j));
			dispatch(m.actions.setSuccess("Event Updated"));
			browserHistory.push('/');
		}).catch(r => console.log(r));
	}

}
*/

export const UPDATE_QUICK_LIST = 'BOOKING_UPDATE_QUICK_LIST';

export const updateQuickList = participants => {
    return {
        type: UPDATE_QUICK_LIST,
        participants: participants
    }
};

//export const CREATE_BOOKING = 'BOOKING_CREATE_BOOKING';

export const createBooking = booking => {
    return dispatch => {
        fetch('/api/booking/' + booking.eventId + '/create', "POST", booking)
            .then(j => {
                dispatch(updateBookings(j));
                dispatch(updateCurrentBooking(null));
                dispatch(push('/event/' + booking.eventId + '/book/thanks'));
            })
    }
};

export const saveBooking = (booking, own) => {
    return dispatch => {
        fetch('/api/booking/edit', "POST", booking)
            .then(j => {
                dispatch(updateBookings(j));
                dispatch(updateCurrentBooking(null));
                dispatch(own ? push('/event/' + booking.eventId + '/book/thanks') : push('/event/' + booking.eventId + '/manage/bookings'));
            });
    }
};

export const cancelBooking = id => {
    return dispatch => {
        fetch('/api/booking/delete', "POST", {id: id})
            .then(j => {
                dispatch(push('/cancel'));
                dispatch(deleteBooking(id));
            });
    }
};
//export const UPDATE_BOOKING = 'BOOKING_UPDATE_BOOKING';

export const getBooking = (id) => {
    return dispatch => {
        fetch('/api/booking/' + id, "GET")
            .then(j => {
                dispatch(updateBookings(j));
            }).catch(fetch.fail);
    }
};


export const getUserBookings = () => {
    return dispatch => {
        fetch('/api/booking/user', "GET")
            .then(j => {
                dispatch(updateBookings(j));
            })
    }

};

export const getEventBookings = (eventId) => {
    return dispatch => {
        fetch('/api/booking/event/' + eventId, "GET")
            .then(j => {
                dispatch(updateBookings(j));
            })
    }

};

export const UPDATE_BOOKINGS = 'BOOKING_UPDATE_BOOKINGS';
export const updateBookings = data => {
    return {
        type: UPDATE_BOOKINGS,
        bookings: data.bookings
    }
};

export const DELETE_BOOKING = "BOOKING_DELETE_BOOKING";
const deleteBooking = id => {
    return {
        type: DELETE_BOOKING,
        id: id
    }
};

export const redirectFromThanks = eventId => dispatch => {
    dispatch(push('/event/' + eventId + '/book'));
};

export const UPDATE_CURRENT_BOOKING = "BOOKING_UPDATE_CURRENT_BOOKING"

export const updateCurrentBooking = booking => {
    if (booking && !booking.id) local.setItem('currentBooking', JSON.stringify(booking));
    return {
        type: UPDATE_CURRENT_BOOKING,
        booking: booking
    }
};

export const applyToBook = application => {
    return dispatch => {
        fetch('/api/event/' + application.eventId + '/apply', "POST", application)
            .then(j => {
                dispatch(updateUser(j));
                dispatch(push('/event/' + application.eventId + '/apply/thanks'));
            })
    }
};