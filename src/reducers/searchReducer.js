import {
  SEARCH_STOCKS_FAILURE, SEARCH_STOCKS_SUCCESS,
  SEARCH_NEWS_FAILURE, SEARCH_NEWS_SUCCESS,
} from '../actions/actionTypes';

import { initialNewsSearch, initialStocksSearch, mockNewsSearch } from './initialState';

export const newsSearchReducer = (state = initialNewsSearch, action) => {
  switch (action.type) {
    case SEARCH_NEWS_FAILURE:
      return {
        ...state,
        newsSearched: mockNewsSearch,
      };
    case SEARCH_NEWS_SUCCESS:
      return state;
    default:
      return state;
  }
};

export const stocksSearchReducer = (state = initialStocksSearch, action) => {
  switch (action.type) {
    case SEARCH_STOCKS_SUCCESS:
      return {
        ...state,
        stocksSearched: mockNewsSearch,
      };
    case SEARCH_STOCKS_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  }
}
