import {
    FETCH_SEARCH_STOCK_FAILURE,
    FETCH_SEARCH_STOCK_SUCCESS,
} from '../actions/actionTypes';

import { initialSearch } from './initialState';

let index;

const searchReducer = (state = initialSearch, action) => {
    switch (action.type) {
        case FETCH_SEARCH_STOCK_SUCCESS:
            return { ...state, searchList: action.payload };

        case FETCH_SEARCH_STOCK_FAILURE:
            return state;
        default:
            return state;
    }
};

export default searchReducer;
