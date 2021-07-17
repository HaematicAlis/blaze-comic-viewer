import * as api from '../api';
import { GET_VOCAB, ADD_VOCAB, DELETE_VOCAB } from '../constants/actionTypes.js';

export const getVocab = (id) => async (dispatch) => {
    try {
        const { data } = await api.getVocab({ id: id });
        dispatch({ type: GET_VOCAB, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const addVocab = (vocabInfo) => async (dispatch) => {
    try {
        const { data } = await api.addVocab({ comic: vocabInfo.comic, page: vocabInfo.page, term: vocabInfo.term, gloss: vocabInfo.gloss });
        dispatch({ type: ADD_VOCAB, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteVocab = (id) => async (dispatch) => {
    try {
        await api.deleteVocab({ id: id });
        dispatch({ type: DELETE_VOCAB, payload: id });
    } catch (error) {
        console.log(error);
    }
}