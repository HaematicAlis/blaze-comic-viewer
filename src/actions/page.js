import { SET_PAGE } from '../constants/actionTypes.js';

export const setPage = (pageNum) => async (dispatch) => {
    try {
        dispatch({ type: SET_PAGE, payload: pageNum });
    } catch (error) {
        console.log(error);
    }
}