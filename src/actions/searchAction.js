import axios from 'axios';

import {
  SEARCH_NEWS_SUCCESS, SEARCH_NEWS_FAILURE,
  SEARCH_STOCKS_SUCCESS, SEARCH_STOCKS_FAILURE,
} from './actionTypes';

import { config } from '../config';

export const baseUrl = config.STOCKMAN_API_BASE_URL;

export const searchNewsSuccess = news => ({
    type: SEARCH_NEWS_SUCCESS,
    payload: news,
});

export const searchNewsFailure = error => ({
  type: SEARCH_NEWS_FAILURE,
  payload: error,
});

export const searchStocksSuccess = stocks => ({
    type: SEARCH_STOCKS_SUCCESS,
    payload: stocks,
});

export const searchStocksFailure = error => ({
    type: SEARCH_STOCKS_FAILURE,
    payload: error,
});

export const searchNews = (search) => {
  return axios.get(`${baseUrl}/search/news/?search=${search}`)
};

export const searchStocks = (search) => {
  console.log('this is the uppervalue');
  console.log(`${baseUrl}/stocks/search-like-name/?stock_code=${search.toUpperCase()}`);
  return axios.get(`${baseUrl}/stocks/search-like-name/?stock_code=${search.toUpperCase()}`)      
};

export const searchNewsAndStocks = (search) => dispatch => {
  return axios.all([
    searchNews(search),
    searchStocks(search),
  ])
  .then((response) => {
    if (response) {
                
      console.log(response[0].data.results);
      console.log(response[1].data);
      dispatch(searchNewsSuccess(response[0].data.results));
      dispatch(searchStocksSuccess(response[1].data));
    }
  }).catch(error => {
    dispatch(searchNewsFailure(error));
    dispatch(searchStocksFailure(error));
  });
}
