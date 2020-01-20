import axios from 'axios';
import {
    FETCH_FEATURED_NEWS_SUCCESS,
    FETCH_GENERAL_NEWS_SUCCESS,
    FETCH_FEATURED_NEWS_FAILURE,
    FETCH_GENERAL_NEWS_FAILURE,
    FETCH_FEATURED_NEWS_LOADING,
    FETCH_GENERAL_NEWS_LOADING,
    FETCH_INSIDE_BUSINESS_LOADING,
    FETCH_INSIDE_BUSINESS_SUCCESS,
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

const fetchFeaturedNewsLoading = () => ({
    type: FETCH_FEATURED_NEWS_LOADING,
});

const fetchGeneralNewsLoading = () => ({
    type: FETCH_GENERAL_NEWS_LOADING,
});

const fetchInsideBusinessSuccess = payload => ({
    type: FETCH_INSIDE_BUSINESS_SUCCESS,
    payload,
});

const fetchInsideBusinessLoading = () => ({
    type: FETCH_INSIDE_BUSINESS_LOADING,
});

export const fetchInsideBusiness = () => dispatch => {
    dispatch(fetchInsideBusinessLoading);
    return axios
        .get(`${baseUrl}/Analysis/`)
        .then(res => {
            dispatch(fetchInsideBusinessSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchNewsFailure(error));
        });
};

export const fetchNews = () => dispatch => {
    dispatch(fetchGeneralNewsLoading);
    return axios
        .get(`${baseUrl}/News/`)
        .then(res => {
            console.log('base url is ==> ', baseUrl);
            console.log('res.data is ==> ', res.data);
            console.log('res.data is ==> ', res.data.results.length, [...res.data.results]);
            dispatch(fetchNewsSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchNewsFailure(error));
        });
};

export const fetchFeaturedNews = () => dispatch => {
    dispatch(fetchFeaturedNewsLoading);
    return axios
        .get(`${baseUrl}/News/?is_featured=true`)
        .then(res => {
            dispatch(fetchFeaturedNewsSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchFeaturedNewsFailure(error));
        });
};
