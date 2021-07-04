import { LOGIN } from '../constants/actionTypes.js';

const account = (session = { id: 0 }, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        default:
            return session;
    }
}

export default account;