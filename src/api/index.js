import axios from 'axios';

//const url = 'http://10.0.0.14:5000';
const url = 'https://blaze-comic-viewer.herokuapp.com';

// account
export const register = (registerInfo) => axios.post(url + '/account/register', registerInfo);
export const login = (loginInfo) => axios.post(url + '/account/login', loginInfo);

// comics
export const getComics = (id) => axios.post(url + '/comic/get', id);
export const addComic = (comicInfo) => axios.post(url + '/comic/add', comicInfo);
export const addImage = (imageInfo) => axios.post(url + '/comic/addImage', imageInfo);

// imgur api
export const getAlbum = (info) => axios.get(info.url, info.config, info.formData);