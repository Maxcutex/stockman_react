import axios from 'axios';
import {
    FETCH_OPINION_LOADING, 
    FETCH_OPINION_SUCCESS, 
    FETCH_OPINION_FAILURE
} from './actionTypes';
import { config } from '../config';

export const baseUrl = config.STOCKMAN_API_BASE_URL;

const fetchOpinionLoading = () => ({
    type: FETCH_OPINION_LOADING,
});

export const fetchOpinionSuccess = opinion => ({
    type: FETCH_OPINION_SUCCESS,
    payload: opinion,
});

export const fetchOpinionFailure = error => ({
    type: FETCH_OPINION_FAILURE,
    payload: error,
});

export const fetchOpinionAnalysis = () => dispatch => {
    dispatch(fetchOpinionLoading());
    return axios
        .get(`${baseUrl}/Analysis/`)
        .then(res => {
            console.log(res.data);
            dispatch(fetchOpinionSuccess(res.data));
            console.log('i have dispatch success')
        })
        .catch(error => {
            dispatch(fetchOpinionFailure(error));
        });
};

export const fetchOpinionAnalysisById = (id) => dispatch => {
    dispatch(fetchOpinionLoading());
    return axios
        .get(`${baseUrl}/Analysis/${id}`)
        .then(res => {
            dispatch(fetchOpinionSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchOpinionFailure(error));
        });
};