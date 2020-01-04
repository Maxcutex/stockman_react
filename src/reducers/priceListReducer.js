import {
    FETCH_PRICE_LIST_FAILURE,
    FETCH_PRICE_LIST_SUCCESS,
    FETCH_PRICE_LIST_LOADING,
} from '../actions/actionTypes';

import { initialPriceList } from './initialState';

const priceListReducer = (state = initialPriceList, action) => {
    switch (action.type) {
        case FETCH_PRICE_LIST_SUCCESS:
            return {
                ...state,
                priceList: action.payload,
                priceListLoading: false,
            };
        case FETCH_PRICE_LIST_FAILURE:
            return state;

        case FETCH_PRICE_LIST_LOADING:
            return {
                ...state,
                priceListLoading: true,
            };
        default:
            return state;
    }
};

export default priceListReducer;
