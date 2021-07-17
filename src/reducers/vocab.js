import { GET_VOCAB, ADD_VOCAB, DELETE_VOCAB } from '../constants/actionTypes.js';

const vocab = (vocab = [], action) => {
    switch (action.type) {
        case GET_VOCAB:
            return action.payload;
        case ADD_VOCAB:
            return [...vocab, action.payload];
        case DELETE_VOCAB:
            return vocab.filter((vocab) => vocab._id !== action.payload);
        default:
            return vocab;
    }
}

export default vocab;