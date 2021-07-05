import * as api from '../api';

import { LOGIN, LOGOUT } from '../constants/actionTypes.js';
import { cookies } from '../index.js';

export const login = (loginInfo) => async (dispatch) => {
    try {
        const { data } = await api.login(loginInfo);
        cookies.set('ID', data.id);
        cookies.set('Username', data.username);
        dispatch({ type: LOGIN, payload: data });
    } catch (error) {
        if (error.response.status === 404) {
            dispatch({ type: LOGIN, payload: { message: "User not found" }});
        } else {
            console.log(error);
        }
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT, payload: null });
    } catch (error) {
        console.log(error);
    }
}

export const reload = (loginInfo) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN, payload: loginInfo });
    } catch (error) {
        console.log(error);
    }
}