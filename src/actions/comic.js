import * as api from '../api';

import { GET_COMICS, ADD_COMIC } from '../constants/actionTypes.js';

export const getComics = (id) => async (dispatch) => {
    try {
        const { data } = await api.getComics(id);
        dispatch({ type: GET_COMICS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const addComic = (comicInfo, cover) => async (dispatch) => {
    try {
        const { data } = await api.addComic(comicInfo);
        dispatch({ type: ADD_COMIC, payload: data });
        await api.addImage({ id: data._id, image: cover })
    } catch (error) {
        console.log(error);
    }
}