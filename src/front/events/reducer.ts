import * as Immutable from 'immutable'
import * as a from './actions'
import * as user from '../user'


//should Events be a map or list? both suck sometimes..
const initalEventState = Immutable.fromJS({events: {}});


//return state.set("bookings", action.bookings.reduce((a,c) => {a.set(c.id,Immutable.fromJS(c))}, state.get("bookings") || Immutable.Map()));
export default function Events(state = initalEventState, action) {

    switch (action.type) {
        case a.UPDATE_EVENTS:
            return state.set("events", action.events.reduce((a, c) => {
                console.log("updating events in UPDATE_EVENTS");
                return a.set(c.id, Immutable.fromJS(c))
            }, state.get("events") || Immutable.fromJS({})));
        case a.REMOVE_EVENT:
            return state.deleteIn(["events", action.id]);
    }
    return state;
}