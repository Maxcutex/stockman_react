import {
    FETCH_LIST_STOCKS_FAILURE, FETCH_LIST_STOCKS_SUCCESS,
    FETCH_LIST_STOCKS_LOADING,
  } from '../actions/actionTypes';

  import {initialStocksFetched, initialPriceMovement } from './initialState';


export const stocksReducer = (state = initialStocksFetched, action) => {
  switch (action.type) {
    case FETCH_LIST_STOCKS_LOADING:
      return {
        ...state,
        stocksLoading: true,
      };
      case FETCH_LIST_STOCKS_SUCCESS:
        return {
          ...state,
          stocksLoading: false,
          stocksFetched: action.payload,
        };
    case FETCH_LIST_STOCKS_FAILURE:
      return {
        ...state,
        stocksLoading: false,
      }
    default:
      return state;
  }
}

export const priceMovementReducer = (state = initialPriceMovement, action) => {
  switch (action.type) {
    case FETCH_LIST_STOCKS_LOADING:
      return {
        ...state,
        priceMovementLoading: true,
      };
      case FETCH_LIST_STOCKS_SUCCESS:
        return {
          ...state,
          priceMovementLoading: false,
          priceMovementList: action.payload,
        };
    case FETCH_LIST_STOCKS_FAILURE:
      return {
        ...state,
        priceMovementLoading: false,
      }
    default:
      return state;
  }
}
