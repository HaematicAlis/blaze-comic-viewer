import * as api from '../api';

import { GET_COMICS, ADD_COMIC, DELETE_COMIC } from '../constants/actionTypes.js';

export const getComics = (id) => async (dispatch) => {
    try {
        const { data } = await api.getComics({ id: id });
        dispatch({ type: GET_COMICS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const addComic = (comicInfo, cover) => async (dispatch) => {
    try {
        const { data } = await api.addComic(comicInfo);
        const { data: newData } = await api.addImage({ id: data._id, image: cover });
        dispatch({ type: ADD_COMIC, payload: newData });
    } catch (error) {
        console.log(error);
    }
}

export const deleteComic = (id) => async (dispatch) => {
    try {
        await api.deleteComic({ id: id });
        dispatch({ type: DELETE_COMIC, payload: id });
    } catch (error) {
        console.log(error);
    }
}