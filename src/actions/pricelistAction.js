import axios from 'axios';
import {
    FETCH_PRICE_LIST_FAILURE,
    FETCH_PRICE_LIST_SUCCESS,
    FETCH_PRICE_LIST_LOADING,
} from './actionTypes';
import { config } from '../config';

export const baseUrl = config.STOCKMAN_API_BASE_URL;

export const fetchPriceListSuccess = pricelist => ({
    type: FETCH_PRICE_LIST_SUCCESS,
    payload: pricelist,
});

export const fetchPriceListFailure = error => ({
    type: FETCH_PRICE_LIST_FAILURE,
    payload: error,
});
 

const fetchPriceListLoading = (action) => ({
    type: FETCH_PRICE_LIST_LOADING,
    payload: action,
});

export const fetchPriceList = (price_date) => dispatch => {
    console.log("before setting loader")

    dispatch(fetchPriceListLoading(true));
    console.log("after setting loader")
    return axios
        .get(`${baseUrl}/sectorpricelist?price_date=${price_date}`)
        .then(res => {
            console.log(res)
            dispatch(fetchPriceListSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchPriceListFailure(error));
        });
};
