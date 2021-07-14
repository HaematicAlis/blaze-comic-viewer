import axios from 'axios';

//const url = 'http://10.0.0.14:5000';
const url = 'https://blaze-comic-viewer.herokuapp.com';

export const register = (registerInfo) => axios.post(url + '/account/register', registerInfo);
export const login = (loginInfo) => axios.post(url + '/account/login', loginInfo);

export const getComics = (id) => axios.post(url + '/comic/get', id);
export const addComic = (comicInfo) => axios.post(url + '/comic/add', comicInfo);
export const addImage = (imageInfo) => axios.post(url + '/comic/addImage', imageInfo);

export const getAlbum = (albumHash) => {
    var url = `https://api.imgur.com/3/album/${albumHash}/images`;
    var data = new FormData();

    var config = {
      headers: { 
        'Authorization': 'Client-ID fcb1462619a6667',
      },
    };

    axios.get(url, config, data)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}