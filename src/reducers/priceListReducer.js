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
                testPriceLoading: false,
            };
        case FETCH_PRICE_LIST_FAILURE:
            return {
                ...state,
                priceListLoading: false,
                testPriceLoading: false,
            };

        case FETCH_PRICE_LIST_LOADING:
            console.log("attempting to set loader")
            return {
                ...state,
                priceListLoading: action.payload,
                testPriceLoading: action.payload,
            };
        default:
            return state;
    }
};

export default priceListReducer;
