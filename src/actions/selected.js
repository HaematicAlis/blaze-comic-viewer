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
        var images = data.data;
        var newImages = [];
        images.forEach((image) => {
            newImages.push({ name: image.title, fileType: image.type, size: image.size, base64: image.link });
        });
        dispatch({ type: SELECT, payload: newImages });
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