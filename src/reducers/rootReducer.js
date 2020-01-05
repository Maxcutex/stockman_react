import { combineReducers } from 'redux';

import userReducer from './userReducer';
import newsReducer from './newsReducer';
import priceListReducer from './priceListReducer';
import { newsSearchReducer,  stocksSearchReducer } from './searchReducer';

export default combineReducers({
  userReducer, 
  news: newsReducer,
  newsSearchReducer,
  stocksSearchReducer,
  pricelist: priceListReducer
});
