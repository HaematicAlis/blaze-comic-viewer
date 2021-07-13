import { SET_MODE } from '../constants/actionTypes.js';

const viewOptions = (viewOptions = { mode: 0 }, action) => {
    switch (action.type) {
        case SET_MODE:
            return { ...viewOptions, mode: action.payload };
        default:
            return viewOptions;
    }
}

export default viewOptions;