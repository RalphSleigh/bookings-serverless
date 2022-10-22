import * as Immutable from 'immutable'
import * as a from './actions'


const initalMessageState = Immutable.Map();

export default function Messages(state = initalMessageState, action) {
	switch (action.type) {
		case a.SET_WARNING_MESSAGE: return state.set("warning", { message: action.message, time: new Date() }).set("success", null);
		case a.SET_SUCCESS_MESSAGE: return state.set("success", { message: action.message, time: new Date() }).set("warning", null);
	}
	return state;

}