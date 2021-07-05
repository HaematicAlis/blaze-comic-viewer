import axios from 'axios';

//const url = 'http://10.0.0.14:5000';
const url = 'https://blaze-comic-viewer.herokuapp.com/';

export const register = (registerInfo) => axios.post(url + '/account/register', registerInfo);
export const login = (loginInfo) => axios.post(url + '/account/login', loginInfo);