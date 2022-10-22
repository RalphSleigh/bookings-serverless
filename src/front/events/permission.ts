import {connectedReduxRedirect, connectedRouterRedirect} from 'redux-auth-wrapper/history4/redirect'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'

import * as P from '../../shared/permissions'

export const editEventCheck = connectedRouterRedirect({
	authenticatedSelector: (state, props) => {
		if (props.event === undefined) return true;
        return P.editEvent(state.getIn(["User", "user"]).toJS(), state.getIn(["Events", "event", parseInt(props.match.params.eventId)]).toJS());
	},
	redirectPath: "/user",
	wrapperDisplayName: "Edit Event Check"
});

export const createEventCheck = connectedRouterRedirect({
	authenticatedSelector: (state, props) => {
        return P.createEvent(state.getIn(["User", "user"]).toJS());
	},
	redirectPath: "/user",
	wrapperDisplayName: "Create Event Check"
});

export const showEditLink = connectedAuthWrapper({
	authenticatedSelector: (state, props) => {
        return P.editEvent(state.getIn(["User", "user"]).toJS(), props.event);
	},
	wrapperDisplayName: "showEventEditLink"
});

export const showCreateLink = connectedAuthWrapper({
	authenticatedSelector: (state) => {
        return P.createEvent(state.getIn(["User", "user"]).toJS());
	},
	wrapperDisplayName: "showEventCreateLink"
});

export const showBookLink = connectedAuthWrapper({
	authenticatedSelector: (state, props) => {
        return P.bookEvent(state.getIn(["User", "user"]).toJS(), props.event);
	},
	wrapperDisplayName: "showBookLink"
});

export const showBookingEditLink = connectedAuthWrapper({
    authenticatedSelector: (state, props) => {
        return P.editBooking(state.getIn(["User", "user"]).toJS(), props.event, props.booking);
    },
    wrapperDisplayName: "showBookLink"
});

export const showApplyToBookLink = connectedAuthWrapper({
    authenticatedSelector: (state, props) => {
        return P.applyToBookEvent(state.getIn(["User", "user"]).toJS(), props.event);
    },
    wrapperDisplayName: "showApplyToBookLink"
});

export const showManageLink = connectedAuthWrapper({
	authenticatedSelector: (state, props) => {
		if (props.event === undefined) return true;
        return P.manageEvent(state.getIn(["User", "user"]).toJS(), props.event);
	},
	wrapperDisplayName: "showManageLink"
});