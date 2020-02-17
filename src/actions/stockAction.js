import axios from 'axios';
import {
    FETCH_LIST_STOCKS_LOADING, FETCH_LIST_STOCKS_SUCCESS, FETCH_LIST_STOCKS_FAILURE, 
    FETCH_MOVEMENT_STOCK_FAILURE, FETCH_MOVEMENT_STOCK_SUCCESS, FETCH_MOVEMENT_STOCK_LOADING
} from './actionTypes';
import { config } from '../config';

export const baseUrl = config.STOCKMAN_API_BASE_URL;

export const fetchAllStockListSuccess = stocklist => ({
    type: FETCH_LIST_STOCKS_SUCCESS,
    payload: stocklist,
});

export const fetchAllStockListFailure = error => ({
    type: FETCH_LIST_STOCKS_FAILURE,
    payload: error,
});
 

const fetchAllStockListLoading = () => ({
    type: FETCH_LIST_STOCKS_LOADING,
});

export const fetchAllStockList = () => dispatch => {
    dispatch(fetchAllStockListLoading);
    return axios
        .get(`${baseUrl}/stocks/all`)
        .then(res => {
            dispatch(fetchAllStockListSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchAllStockListFailure(error));
        });
};




export const fetchPriceMovementSuccess = movementlist => ({
    type: FETCH_MOVEMENT_STOCK_SUCCESS,
    payload: movementlist,
});

export const fetchPriceMovementFailure = error => ({
    type: FETCH_MOVEMENT_STOCK_FAILURE,
    payload: error,
});
 

const fetchPriceMovementLoading = () => ({
    type: FETCH_MOVEMENT_STOCK_LOADING,
});

export const fetchPriceMovement = (stockid, startDate, endDate) => dispatch => {
    dispatch(fetchPriceMovementLoading);
    return axios
        .get(`${baseUrl}/PriceLists/view-date-range/?stock=${stockid}&start_date=${startDate}&end_date=${endDate}`)
        .then(res => {
            console.log(`${baseUrl}/PriceLists/view-date-range/?stock=${stockid}&start_date=${startDate}&end_date=${endDate}`);
            console.log(res.data)
            dispatch(fetchPriceMovementSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchPriceMovementFailure(error));
        });
};