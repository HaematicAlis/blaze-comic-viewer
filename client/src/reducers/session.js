import { LOGIN } from '../constants/actionTypes.js';

const session = (session = { message: 'Not logged in' }, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        default:
            return session;
    }
}

export default session;