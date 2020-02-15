import { combineReducers } from 'redux';

import userReducer from './userReducer';
import newsReducer from './newsReducer';
import priceListReducer from './priceListReducer';
import {stocksReducer, priceMovementReducer} from './stocksReducer';
import { newsSearchReducer,  stocksSearchReducer } from './searchReducer';

export default combineReducers({
  userReducer, 
  news: newsReducer,
  newsSearchReducer,
  stocksSearchReducer,
  pricelist: priceListReducer,
  stockList: stocksReducer,
  priceMovementList: priceMovementReducer,
});
