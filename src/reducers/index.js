import { combineReducers } from 'redux';

import session from './session.js';
import comics from './comics.js';

export default combineReducers({ session, comics });