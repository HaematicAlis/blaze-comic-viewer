import { SELECT, CLEAR_SELECTED } from '../constants/actionTypes.js';

const selected = (selected = [], action) => {
    switch (action.type) {
        case SELECT:
            return action.payload;
        case CLEAR_SELECTED:
            return [];
        default:
            return selected;
    }
}

export default selected;