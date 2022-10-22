import {connectedRouterRedirect} from 'redux-auth-wrapper/history4/redirect'

import * as P from '../../shared/permissions'
import connectedAuthWrapper from "redux-auth-wrapper/connectedAuthWrapper";

export const manageEventCheck = connectedRouterRedirect({
	authenticatedSelector: (state, props) => {
        return P.manageEvent(state.getIn(["User", "user"]).toJS(), state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS());
	},
	redirectPath: "/user",
	wrapperDisplayName: "Manage Event Check"
});

export const manageWholeEventWrapper = connectedAuthWrapper({
    authenticatedSelector: (state, props) => {
        const user = state.getIn(["User", "user"]).toJS();
        const event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS();
        return P.manageWholeEvent(user, event);
    },
    wrapperDisplayName: "manageWholeEventWrapper"
});

export const manageRolesWrapper = connectedAuthWrapper({
    authenticatedSelector: (state, props) => {
        const user = state.getIn(["User", "user"]).toJS();
        const event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS();
        return P.createRole(user, event);
    },
    wrapperDisplayName: "manageWholeEventWrapper"
});

export const manageWholeEventCheck = connectedRouterRedirect({
    authenticatedSelector: (state, props) => {
        const user = state.getIn(["User", "user"]).toJS();
        const event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS();
        return P.manageWholeEvent(user, event);
    },
    redirectPath: "/user",
    wrapperDisplayName: "manageWholeEventCheck"
});

export const showBookingEditLink = connectedAuthWrapper({
    authenticatedSelector: (state, props) => {
        return P.editBooking(state.getIn(["User", "user"]).toJS(), props.event, props.booking);
    },
    wrapperDisplayName: "showBookingEditLink"
});

export const manageMoneyWrapper = connectedAuthWrapper({
    authenticatedSelector: (state, props) => {
        const user = state.getIn(["User", "user"]).toJS();
        const event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]).toJS();
        return P.viewMoney(user, event);
    },
    wrapperDisplayName: "manageWholeEventWrapper"
});