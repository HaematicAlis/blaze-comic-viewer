import { combineReducers } from 'redux';

import session from './session.js';
import comics from './comics.js';
import selected from './selected.js';
import page from './page.js';

export default combineReducers({ session, comics, selected, page });