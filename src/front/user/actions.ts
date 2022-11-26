import fetch from '../fetch'
import {push} from 'react-router-redux'
import * as m from '../messages'

import { storageFactory } from "storage-factory";
//@ts-ignore
const local = storageFactory(() => localStorage);

export const UPDATE_USER = 'USER_UPDATE_USER';

export const getUser = () => {
    return (dispatch, getState) => {
        fetch('/api/user', "GET")
            .then(j => {
                if(j.remoteId)local.setItem('userId', j.remoteId.substr(0, 4));
                const user = getState().get('User').toJS();
                if (!user.user || user.user.id !== j.id) dispatch(updateUser(j))
            });
    }
};

export const doLogin = (credentials) => {
    return (dispatch) => {
        fetch('/api/user/login', "POST", credentials)
            .then(j => {
                    if(j.remoteId)local.setItem('userId', j.remoteId.substr(0, 4));
                    dispatch(updateUser(j));
                    dispatch(m.actions.setSuccess("Logged in"));
                    dispatch(push('/'));
                },
                e => {
                    if (e.status === 401) dispatch(m.actions.setWarning("Invalid e-mail or password"));
                });
    };
};

export const doLogout = () => {
    return (dispatch) => {
        fetch('/api/user/logout', "POST")
            .then(j => {
                window.location.reload()
                /*
                dispatch(updateUser(j));
                dispatch(m.actions.setSuccess("Logged out"));
                dispatch(push('/'));
                */
            });
    };
};


export const updateUser = user => {
    return {
        type: UPDATE_USER,
        user: user
    }
};

export const getUserList = (eventId) => dispatch => {
    fetch('/api/users/' + eventId, 'GET')
        .then(u => dispatch(updateList(u.users)));
};

export const UPDATE_LIST = "USERS_UPDATE_LIST";

const updateList = users => {
    return {
        type: UPDATE_LIST,
        users: users
    }
};