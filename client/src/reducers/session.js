import { LOGIN, LOGOUT } from '../constants/actionTypes.js';

const session = (session = { id: 0, username: '', message: 'Not logged in' }, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return { id: 0, username: '', message: 'You have been logged out' };
        default:
            return session;
    }
}

export default session;