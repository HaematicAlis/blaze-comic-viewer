import { LOGIN, LOGOUT } from '../constants/actionTypes.js';

const session = (session = { id: 0, username: '' }, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return { id: 0, username: '' };
        default:
            return session;
    }
}

export default session;