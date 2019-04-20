import { combineReducers } from 'redux';

import userReducer from './userReducer';
import newsReducer from './newsReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    userReducer,
    news: newsReducer,
    searchList: searchReducer,
});
