import axios from 'axios';
import {
    FETCH_FEATURED_NEWS_SUCCESS,
    FETCH_GENERAL_NEWS_SUCCESS,
    FETCH_FEATURED_NEWS_FAILURE,
    FETCH_GENERAL_NEWS_FAILURE,
} from './actionTypes';
import { config } from '../config';

export const baseUrl = config.STOCKMAN_API_BASE_URL;

export const fetchNewsSuccess = news => ({
    type: FETCH_GENERAL_NEWS_SUCCESS,
    payload: news,
});

export const fetchFeaturedNewsSuccess = news => ({
    type: FETCH_FEATURED_NEWS_SUCCESS,
    payload: news,
});
export const fetchNewsFailure = error => ({
    type: FETCH_GENERAL_NEWS_FAILURE,
    payload: error,
});
export const fetchFeaturedNewsFailure = error => ({
    type: FETCH_FEATURED_NEWS_FAILURE,
    payload: error,
});
export const fetchNews = () => dispatch => {
    return axios
        .get(`${baseUrl}/News/`)
        .then(res => {
            dispatch(fetchNewsSuccess(res.data.results));
        })
        .catch(error => {
            dispatch(fetchNewsFailure(error));
        });
};

export const fetchFeaturedNews = () => dispatch => {
    return axios
        .get(`${baseUrl}/News/?is_featured=true`)
        .then(res => {
            dispatch(fetchFeaturedNewsSuccess(res.data.results));
        })
        .catch(error => {
            dispatch(fetchFeaturedNewsFailure(error));
        });
};
