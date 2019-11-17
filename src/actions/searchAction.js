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
  return axios.get(`${baseUrl}/news/search?keyword=${search}`)
};

export const searchStocks = (search) => {
  return axios.get(`${baseUrl}/stocks/search?keyword=${search}`)      
};

export const searchNewsAndStocks = (search) => dispatch => {
  return axios.all([searchNews(search), searchStocks(search)])
  .then((news, stocks) => {
    if (news) {
      console.log('news is ==> ', news);
      dispatch(searchNewsSuccess(news.data.results));
    }
    if (stocks) {
      console.log('stocks is ==> ', stocks);
      dispatch(searchNewsSuccess(stocks.data.results));
    }
  }).catch(error => {
    dispatch(searchNewsFailure(error));
    dispatch(searchStocksFailure(error));
  });
}
