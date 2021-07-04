import * as api from '../api';

import { REGISTER, LOGIN } from '../constants/actionTypes.js';

export const register = (registerInfo) => async (dispatch) => {
    try {
        const { data } = await api.register(registerInfo);
        console.log(data);
        //dispatch({ type: REGISTER, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const login = (loginInfo) => async (dispatch) => {
    try {
        const { data, status } = await api.login(loginInfo);
        console.log(data);
        console.log(status);
        dispatch({ type: LOGIN, payload: data });
    } catch (error) {
        console.log(error);
    }
}