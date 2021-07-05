import * as api from '../api';

import { LOGIN, LOGOUT } from '../constants/actionTypes.js';
import { cookies } from '../index.js';

export const login = (loginInfo) => async (dispatch) => {
    try {
        const { data } = await api.login(loginInfo);
        cookies.set('ID', data.id, { secure: true });
        cookies.set('Username', data.username, { secure: true });
        dispatch({ type: LOGIN, payload: data });
    } catch (error) {
        dispatch({ type: LOGIN, payload: { message: error.response.data.message }});
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