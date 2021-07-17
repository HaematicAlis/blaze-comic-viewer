import * as api from '../api';
import { GET_COMICS, ADD_COMIC, DELETE_COMIC } from '../constants/actionTypes.js';

export const getComics = (id, sort) => async (dispatch) => {
    try {
        const { data } = await api.getComics({ id: id, sort: sort });
        dispatch({ type: GET_COMICS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const addComicImgur = (comicInfo) => async (dispatch) => {
    try {
        const split = comicInfo.album.split('/');
        var url = `https://api.imgur.com/3/album/${split[4]}`;
        var formData = new FormData();

        var config = {
            headers: { 
                'Authorization': 'Client-ID fcb1462619a6667',
            },
        };

        var { data } = await api.getAlbum({ url: url, config: config, formData: formData });
        var images = data.data.images;
        var newImages = [];
        images.forEach((image) => {
            newImages.push({ name: image.id, fileType: image.type, size: image.size, src: image.link });
        });

        const { data: comicData } = await api.addComic({ ...comicInfo, images: newImages });
        dispatch({ type: ADD_COMIC, payload: comicData });
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