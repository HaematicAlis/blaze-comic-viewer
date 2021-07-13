import { combineReducers } from 'redux';

import session from './session.js';
import comics from './comics.js';
import selected from './selected.js';
import page from './page.js';
import viewOptions from './viewOptions.js';

export default combineReducers({ session, comics, selected, page, viewOptions });