import { combineReducers } from 'redux';

import userReducer from './userReducer';
import newsReducer from './newsReducer';
import { newsSearchReducer,  stocksSearchReducer } from './searchReducer';

export default combineReducers({
  userReducer, 
  news: newsReducer,
  newsSearchReducer,
  stocksSearchReducer,
});
