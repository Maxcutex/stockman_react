import {
    FETCH_GENERAL_NEWS_SUCCESS,
    FETCH_FEATURED_NEWS_SUCCESS,
    FETCH_FEATURED_NEWS_FAILURE,
    FETCH_GENERAL_NEWS_FAILURE,
} from '../actions/actionTypes';

import { initialNews } from './initialState';

let index;

const newsReducer = (state = initialNews, action) => {
    switch (action.type) {
        case FETCH_GENERAL_NEWS_SUCCESS:
            return { ...state, news: action.payload };
        case FETCH_FEATURED_NEWS_SUCCESS:
            return { ...state, news: action.payload };
        case FETCH_GENERAL_NEWS_FAILURE:
        case FETCH_FEATURED_NEWS_FAILURE:
            return state;
        default:
            return state;
    }
};

export default newsReducer;
