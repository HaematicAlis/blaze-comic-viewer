import { SET_PAGE } from '../constants/actionTypes.js';

const page = (page = 0, action) => {
    switch (action.type) {
        case SET_PAGE:
            return action.payload;
        default:
            return page;
    }
}

export default page;