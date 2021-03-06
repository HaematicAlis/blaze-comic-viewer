import axios from 'axios';

//const url = 'http://10.0.0.14:5000';
const url = 'https://blaze-comic-viewer.herokuapp.com';

// account
export const register = (registerInfo) => axios.post(url + '/account/register', registerInfo);
export const login = (loginInfo) => axios.post(url + '/account/login', loginInfo);

// comics
export const getComics = (id) => axios.post(url + '/comic/get', id);
export const addComic = (comicInfo) => axios.post(url + '/comic/add', comicInfo);
export const deleteComic = (id) => axios.post(url + '/comic/delete', id);
export const setDone = (payload) => axios.post(url + '/comic/setDone', payload);
export const setComicDone = (payload) => axios.post(url + '/comic/setComicDone', payload);

// imgur api
export const getAlbum = (info) => axios.get(info.url, info.config, info.formData);

// vocab
export const getVocab = (page) => axios.post(url + '/vocab/get', page);
export const getAllVocab = (id) => axios.post(url + '/vocab/getall', id);
export const addVocab = (vocabInfo) => axios.post(url + '/vocab/add', vocabInfo);
export const deleteVocab = (id) => axios.post(url + '/vocab/delete', id);