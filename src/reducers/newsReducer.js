import {
    FETCH_GENERAL_NEWS_SUCCESS,
    FETCH_FEATURED_NEWS_SUCCESS,
} from '../actions/actionTypes';

import { initialNews } from './initialState';

let index;

const newsReducer = (state = initialNews, action) => {
    switch (action.type) {
        case FETCH_GENERAL_NEWS_SUCCESS:
            return { ...state, news: action.payload };
        case FETCH_FEATURED_NEWS_SUCCESS:
            return { ...state, news: action.payload };
        default:
            return state;
    }
};

export default newsReducer;
