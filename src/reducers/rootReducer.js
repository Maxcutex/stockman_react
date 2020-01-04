import { combineReducers } from 'redux';

import userReducer from './userReducer';
import newsReducer from './newsReducer';

export default combineReducers({ userReducer, news: newsReducer });
