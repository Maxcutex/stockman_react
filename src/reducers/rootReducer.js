import { combineReducers } from 'redux';

import userReducer from './userReducer';
import newsReducer from './newsReducer';
import priceListReducer from './priceListReducer';

export default combineReducers({ userReducer, news: newsReducer, pricelist: priceListReducer });
