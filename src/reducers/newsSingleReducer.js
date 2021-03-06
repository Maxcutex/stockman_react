import {
    FETCH_SINGLE_INSIDE_BUSINESS_FAILURE,
    FETCH_SINGLE_INSIDE_BUSINESS_SUCCESS,
    FETCH_SINGLE_INSIDE_BUSINESS_LOADING,
    FETCH_SINGLE_OPINION_FAILURE,
    FETCH_SINGLE_OPINION_SUCCESS,
    FETCH_SINGLE_OPINION_LOADING,
    FETCH_SINGLE_GENERAL_NEWS_FAILURE, 
    FETCH_SINGLE_GENERAL_NEWS_SUCCESS, 
    FETCH_SINGLE_GENERAL_NEWS_LOADING,
   
} from '../actions/actionTypes';
import { intialNewsSingle } from './initialState';
const newsSingleReducer = (state = intialNewsSingle, action) => {

    switch (action.type) {
        case FETCH_SINGLE_INSIDE_BUSINESS_SUCCESS:
            return {
                ...state,
                insideBusinessSingle: action.payload,
                insideBusinessSingleLoading: false,
            };
        case FETCH_SINGLE_OPINION_SUCCESS:
            return {
                ...state,
                opinionSingle: action.payload,
                opinionSingleLoading: false,
            };
       
        case FETCH_SINGLE_OPINION_FAILURE:
        case FETCH_SINGLE_INSIDE_BUSINESS_FAILURE:
        case FETCH_SINGLE_GENERAL_NEWS_FAILURE:
            return state;

        case FETCH_SINGLE_INSIDE_BUSINESS_LOADING:
            return {
                ...state,
                insideBusinessSingleLoading: true,
            };
        case FETCH_SINGLE_GENERAL_NEWS_LOADING:
            return {
                ...state,
                newsSingleLoading: true,
            };
        case FETCH_SINGLE_OPINION_LOADING:
            return {
                ...state,
                opinionSingleLoading: true,
            };
        case FETCH_SINGLE_GENERAL_NEWS_SUCCESS:
        
            return {
                ...state,
                newsSingle: action.payload,
                newsSingleLoading: false,
            };
        default:
            return state;
    }
}
 
export default newsSingleReducer;