import {
    FETCH_GENERAL_NEWS_SUCCESS,
    FETCH_FEATURED_NEWS_SUCCESS,
    FETCH_FEATURED_NEWS_FAILURE,
    FETCH_GENERAL_NEWS_FAILURE,
    FETCH_GENERAL_NEWS_LOADING,
    FETCH_FEATURED_NEWS_LOADING,
    FETCH_INSIDE_BUSINESS_LOADING,
    FETCH_INSIDE_BUSINESS_SUCCESS,
} from '../actions/actionTypes';

import { initialNews } from './initialState';

const newsReducer = (state = initialNews, action) => {
    switch (action.type) {
        case FETCH_GENERAL_NEWS_SUCCESS:
            console.log('action.payload is ==> ', action.payload);
            console.log('action.payload is ==> ', action.payload.results);
            return {
                ...state,
                generalNews: action.payload,
                generalNewsLoading: false,
            };
        case FETCH_FEATURED_NEWS_SUCCESS:
            return {
                ...state,
                featuredNews: action.payload,
                fetchNewsLoading: false,
            };
        case FETCH_GENERAL_NEWS_FAILURE:
        case FETCH_FEATURED_NEWS_FAILURE:
            return state;

        case FETCH_GENERAL_NEWS_LOADING:
            return {
                ...state,
                generalNewsLoading: true,
            };
        case FETCH_FEATURED_NEWS_LOADING:
            return {
                ...state,
                fetchNewsLoading: true,
            };
        case FETCH_INSIDE_BUSINESS_LOADING:
            return {
                ...state,
                insideBusinessLoading: true,
            };
        case FETCH_INSIDE_BUSINESS_SUCCESS:
            return {
                ...state,
                insideBusiness: action.payload,
            };
        default:
            return state;
    }
};

export default newsReducer;
