import * as api from '../api';
import { SELECT, CLEAR_SELECTED } from '../constants/actionTypes.js';

export const select = (selected) => async (dispatch) => {
    try {
        dispatch({ type: SELECT, payload: selected });
    } catch (error) {
        console.log(error);
    }
}

export const selectImgur = (albumHash) => async (dispatch) => {
    try {
        var url = `https://api.imgur.com/3/album/${albumHash}/images`;
        var formData = new FormData();

        var config = {
            headers: { 
                'Authorization': 'Client-ID fcb1462619a6667',
            },
        };

        var { data } = await api.getAlbum({ url: url, config: config, formData: formData });
        console.log(data);
        console.log(typeof data);
        var images = [];
        data.forEach((image) => {
            images.push({ name: image.title, type: image.type, size: image.size, base64: image.link });
        });
        dispatch({ type: SELECT, payload: images });
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