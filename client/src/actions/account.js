import * as api from '../api';

import { LOGIN, LOGOUT } from '../constants/actionTypes.js';

export const login = (loginInfo) => async (dispatch) => {
    try {
        const { data } = await api.login(loginInfo);
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