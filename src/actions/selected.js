import { SELECT, CLEAR_SELECTED } from '../constants/actionTypes.js';

export const select = (selected) => async (dispatch) => {
    try {
        dispatch({ type: SELECT, payload: selected });
    } catch (error) {
        console.log(error);
    }
}

export const clearSelected = () => async (dispatch) => {
    try {
        dispatch({ type: CLEAR_SELECTED, payload: null });
    } catch (error) {
        console.log(error);
    }
}