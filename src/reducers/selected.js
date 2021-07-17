import { SELECT, CLEAR_SELECTED } from '../constants/actionTypes.js';

const selected = (selected = { name: '', owner: '', album: '', images: [] }, action) => {
    switch (action.type) {
        case SELECT:
            return action.payload;
        case CLEAR_SELECTED:
            return { name: '', owner: '', album: '', images: [] };
        default:
            return selected;
    }
}

export default selected;