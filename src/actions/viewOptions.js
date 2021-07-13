import { SET_MODE } from '../constants/actionTypes.js';

export const setMode = (mode) => async (dispatch) => {
    try {
        dispatch({ type: SET_MODE, payload: mode });
    } catch (error) {
        console.log(error);
    }
}