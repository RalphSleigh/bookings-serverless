import * as Immutable from 'immutable'
import * as a from './actions'
import * as user from '../user'
import * as manageActions from '../manage/actions'

const initialBookingsState = Immutable.fromJS({currentBooking: null, bookings: null});

export default function Bookings(state = initialBookingsState, action) {

    switch (action.type) {
        //case a.GET_EVENTS: return Immutable.fromJS(action.data);
        case a.UPDATE_BOOKINGS:
            return state.set("bookings", action.bookings.reduce((a, c) => {
                return a.setIn([c.id, 'participants'], null).setIn([c.id, 'payments'], null).mergeDeepIn([c.id], Immutable.fromJS(c))
            }, state.get("bookings") || Immutable.Map()));
        case a.DELETE_BOOKING:
            return state.deleteIn(["bookings", action.id]);
        case user.actions.UPDATE_USER:
            return state.set("bookings", null); //invalidates app render if the user changes until we can fetch more user bookings.
        case a.UPDATE_CURRENT_BOOKING:
            return state.set("currentBooking", Immutable.fromJS(action.booking));
        case manageActions.LOCAL_ASSIGN_VILLAGE:
            return state.setIn(["bookings", action.bookingId, "villageId"], action.villageId)
    }
    return state;
}

