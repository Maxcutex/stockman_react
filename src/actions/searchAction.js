import axios from 'axios';
import {
    FETCH_SEARCH_STOCK_SUCCESS,
    FETCH_SEARCH_STOCK_FAILURE,
} from './actionTypes';
import { config } from '../config';

export const baseUrl = config.STOCKMAN_API_BASE_URL;

export const fetchSearchStockSuccess = (news, quotes) => ({
    type: FETCH_SEARCH_STOCK_SUCCESS,
    payload: {
        news: news,
        quotes: quotes,
    },
});
export const fetchSearchStockFailure = error => ({
    type: FETCH_SEARCH_STOCK_FAILURE,
    payload: error,
});

export const fetchSearchStock = () => dispatch => {
    return axios
        .all([
            axios.get(`${baseUrl}/News/?is_featured=false`),
            axios.get(`${baseUrl}/stocks/`),
        ])
        .then(
            axios.spread((newsRes, quotesRes) => {
                // console.log(newsRes, 'nerws');
                // console.log(quotesRes, 'quote');

                // dispatch(
                //     fetchSearchStockSuccess([
                //         {
                //             ...newsRes.data.results,
                //             ...quotesRes.data.results,
                //         },
                //     ])
                // );
                dispatch(
                    fetchSearchStockSuccess(
                        newsRes.data.results,
                        quotesRes.data.results
                    )
                );
            })
        );
};
