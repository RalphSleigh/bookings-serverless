import fetch from '../fetch'
import { push } from 'react-router-redux'
import * as m from '../messages'

//Actions

export const UPDATE_EVENTS = 'EVENT_UPDATE_EVENTS';
export const GET_EVENTS = 'EVENT_GET_EVENTS';
export const REMOVE_EVENT = 'EVENT_REMOVE_EVENT'

export const updateEvents = e => {
	return {
        type: UPDATE_EVENTS,
        events: e.events
    };
};

export const removeEvent = id => {
    return {
        type: REMOVE_EVENT,
        id: id
    }
};

export const getEvents = () => {
	return (dispatch) => {
		console.log("FETCHING EVENTS")
		fetch('/api/events', "GET")
			.then(j =>
                dispatch(updateEvents(j))
			).catch(r => {
				console.log(r);
			});
	}
};

export const getEvent = (id) => {
	return (dispatch) => {
		fetch('/api/event/' + id, "GET")
			.then(j => {
                dispatch(updateEvents(j));
			}).catch(r => console.log(r));
	}
};

export const getEventDetails = (id) => {
    return (dispatch) => {
        fetch('/api/event/' + id + '/details', "GET")
            .then(j => {
                dispatch(updateEvents(j));
            }).catch(r => console.log(r));
    }
};

export const saveEvent = event => {
	return (dispatch) => {
		fetch('/api/event/edit', "POST", event)
			.then(j => {
                dispatch(updateEvents(j));
				dispatch(m.actions.setSuccess("Event Updated"));
				dispatch(push('/'));
			}).catch(r => console.log(r));
	}

};

export const createEvent = event => {
	return dispatch => {
		fetch('/api/event/create', "POST", event)
			.then(j => {
                dispatch(updateEvents(j));
				dispatch(m.actions.setSuccess("Event Created"));
				dispatch(push('/'));
			}).catch(r => {
				console.log(r);
			});
	}
};

export const deleteEvent = event => {
	return dispatch => {
		fetch('/api/event/delete', "POST", event)
			.then(() => {
                dispatch(removeEvent(event.id));
				dispatch(m.actions.setSuccess("Event Deleted"));
				dispatch(push('/'));
			})
	}
};