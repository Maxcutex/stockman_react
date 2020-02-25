import axios from 'axios';
import {
    FETCH_SINGLE_GENERAL_NEWS_LOADING,
    FETCH_SINGLE_INSIDE_BUSINESS_LOADING,
    FETCH_SINGLE_GENERAL_NEWS_SUCCESS, 
    FETCH_SINGLE_GENERAL_NEWS_FAILURE, 
    FETCH_SINGLE_INSIDE_BUSINESS_FAILURE, 
    FETCH_SINGLE_INSIDE_BUSINESS_SUCCESS,
    
} from './actionTypes';
import { config } from '../config';

export const baseUrl = config.STOCKMAN_API_BASE_URL;

const fetchSingleGeneralNewsLoading = () => ({
    type: FETCH_SINGLE_GENERAL_NEWS_LOADING,
});
export const fetchSingleNewsSuccess = news => ({
    type: FETCH_SINGLE_GENERAL_NEWS_SUCCESS,
    payload: news,
});

export const fetchSingleNewsFailure = error => ({
    type: FETCH_SINGLE_GENERAL_NEWS_FAILURE,
    payload: error,
});

const fetchSingleInsideBusinessSuccess = payload => ({
    type: FETCH_SINGLE_INSIDE_BUSINESS_SUCCESS,
    payload,
});

const fetchSingleInsideBusinessLoading = () => ({
    type: FETCH_SINGLE_INSIDE_BUSINESS_LOADING,
});
const fetchSingleInsideBusinessFailure = error => ({
    type: FETCH_SINGLE_INSIDE_BUSINESS_FAILURE,
    payload: error,
});


export const fetchInsideBusinessById = (id) => dispatch => {
    dispatch(fetchSingleInsideBusinessLoading);
    return axios
        .get(`${baseUrl}/InsideBusiness/${id}`)
        .then(res => {
            dispatch(fetchSingleInsideBusinessSuccess(res.data));
            return true;
        })
        .catch(error => {
            dispatch(fetchSingleInsideBusinessFailure(error));
        });
};
export const fetchNewsById = (id) => dispatch => {
    console.log('about to dispatch loading....')
    dispatch(fetchSingleGeneralNewsLoading);
    return axios
        .get(`${baseUrl}/News/${id}`)
        .then(res => {
            // console.log('base url is ==> ', baseUrl);
            console.log('res.data is ==> ', res.data);
            // console.log('res.data is ==> ', res.data.results.length, [...res.data.results]);
            dispatch(fetchSingleNewsSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchSingleNewsFailure(error));
        });
};