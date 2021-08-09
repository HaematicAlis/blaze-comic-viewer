import { GET_COMICS, ADD_COMIC, DELETE_COMIC, UPDATE_COMIC } from '../constants/actionTypes.js';

const comics = (comics = [], action) => {
    switch (action.type) {
        case GET_COMICS:
            return action.payload;
        case ADD_COMIC:
            return [...comics, action.payload];
        case DELETE_COMIC:
            return comics.filter((comic) => comic._id !== action.payload);
        case UPDATE_COMIC:
            for (var i = 0; i < comics.length; i++) {
                if (comics[i]._id === action.payload._id) {
                    comics[i] = action.payload;
                }
            }
            return comics;
        default:
            return comics;
    }
}

export default comics;