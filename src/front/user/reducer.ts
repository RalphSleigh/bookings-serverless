import * as Immutable from 'immutable'
import * as a from './actions'

//const initalUserState = Immutable.fromJS({id:0, name:"Guest", roles:[]});
const initalUserState = Immutable.fromJS({user: null, list: []});

export default function User(state = initalUserState, action) {

	switch (action.type) {
        case a.UPDATE_USER:
            return state.set('user', Immutable.fromJS(action.user));
        case a.UPDATE_LIST:
            return state.set("list", Immutable.fromJS(action.users));
	}
	return state;

}