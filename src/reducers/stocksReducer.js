import {
    FETCH_LIST_STOCKS_FAILURE, FETCH_LIST_STOCKS_SUCCESS,
    FETCH_LIST_STOCKS_LOADING, 
    FETCH_MOVEMENT_STOCK_FAILURE, FETCH_MOVEMENT_STOCK_SUCCESS, FETCH_MOVEMENT_STOCK_LOADING
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
          stockList: action.payload,
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
    case FETCH_MOVEMENT_STOCK_LOADING:
      return {
        ...state,
        priceMovementLoading: true,
      };
      case FETCH_MOVEMENT_STOCK_SUCCESS:
        return {
          ...state,
          priceMovementLoading: false,
          priceMovementList: action.payload,
        };
    case FETCH_MOVEMENT_STOCK_FAILURE:
      return {
        ...state,
        priceMovementLoading: false,
      }
    default:
      return state;
  }
}
