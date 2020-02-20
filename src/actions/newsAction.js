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
    FETCH_INSIDE_BUSINESS_FAILURE,
    FETCH_WORLD_NEWS_LOADING, 
    FETCH_WORLD_NEWS_SUCCESS, 
    FETCH_WORLD_NEWS_FAILURE
} from './actionTypes';
import { config } from '../config';

export const baseUrl = config.STOCKMAN_API_BASE_URL;

const fetchGeneralNewsLoading = () => ({
    type: FETCH_GENERAL_NEWS_LOADING,
});

export const fetchNewsSuccess = news => ({
    type: FETCH_GENERAL_NEWS_SUCCESS,
    payload: news,
});

export const fetchNewsFailure = error => ({
    type: FETCH_GENERAL_NEWS_FAILURE,
    payload: error,
});

export const fetchFeaturedNewsSuccess = news => ({
    type: FETCH_FEATURED_NEWS_SUCCESS,
    payload: news,
});
export const fetchFeaturedNewsFailure = error => ({
    type: FETCH_FEATURED_NEWS_FAILURE,
    payload: error,
});

const fetchFeaturedNewsLoading = () => ({
    type: FETCH_FEATURED_NEWS_LOADING,
});



const fetchWorldNewsLoading = () => ({
    type: FETCH_WORLD_NEWS_LOADING,
});

export const fetchWorldNewsSuccess = news => ({
    type: FETCH_WORLD_NEWS_SUCCESS,
    payload: news,
});
export const fetchWorldNewsFailure = error => ({
    type: FETCH_WORLD_NEWS_FAILURE,
    payload: error,
});

const fetchInsideBusinessSuccess = payload => ({
    type: FETCH_INSIDE_BUSINESS_SUCCESS,
    payload,
});

const fetchInsideBusinessLoading = () => ({
    type: FETCH_INSIDE_BUSINESS_LOADING,
});
const fetchInsideBusinessFailure = error => ({
    type: FETCH_INSIDE_BUSINESS_FAILURE,
    payload: error,
});

export const fetchInsideBusiness = () => dispatch => {
    dispatch(fetchInsideBusinessLoading());
    return axios
        .get(`${baseUrl}/InsideBusiness/`)
        .then(res => {
            dispatch(fetchInsideBusinessSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchInsideBusinessFailure(error));
        });
};

export const fetchInsideBusinessById = (id) => dispatch => {
    dispatch(fetchInsideBusinessLoading);
    return axios
        .get(`${baseUrl}/InsideBusiness/${id}`)
        .then(res => {
            dispatch(fetchInsideBusinessSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchInsideBusinessFailure(error));
        });
};

export const fetchNews = () => dispatch => {
    dispatch(fetchGeneralNewsLoading);
    return axios
        .get(`${baseUrl}/News/`)
        .then(res => {
            // console.log('base url is ==> ', baseUrl);
            // console.log('res.data is ==> ', res.data);
            // console.log('res.data is ==> ', res.data.results.length, [...res.data.results]);
            dispatch(fetchNewsSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchNewsFailure(error));
        });
};

export const fetchNewsById = (id) => dispatch => {
    dispatch(fetchGeneralNewsLoading);
    return axios
        .get(`${baseUrl}/News/${id}`)
        .then(res => {
            // console.log('base url is ==> ', baseUrl);
            // console.log('res.data is ==> ', res.data);
            // console.log('res.data is ==> ', res.data.results.length, [...res.data.results]);
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

export const fetchWorldNews = () => dispatch => {
    dispatch(fetchWorldNewsLoading);
    return axios
        .get(`${baseUrl}/News/group-by-section`)
        .then(res => {
            // console.log('base url is for World News ==> ', baseUrl);
            // console.log('res.data is for World News ==> ', res.data);
            
            dispatch(fetchWorldNewsSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchWorldNewsFailure(error));
        });
};
