import { combineReducers } from 'redux';

import userReducer from './userReducer';
import newsReducer from './newsReducer';
import opinionReducer from './opinionReducer';
import priceListReducer from './priceListReducer';
import {stocksReducer, priceMovementReducer} from './stocksReducer';
import { newsSearchReducer,  stocksSearchReducer } from './searchReducer';
import newsSingleReducer from './newsSingleReducer'

export default combineReducers({
  userReducer, 
  news: newsReducer,
  newsSingle: newsSingleReducer,
  newsSearchReducer,
  stocksSearchReducer,
  pricelist: priceListReducer,
  stockList: stocksReducer,
  opinion: opinionReducer,
  priceMovementList: priceMovementReducer,
});
