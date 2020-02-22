import {
    FETCH_OPINION_FAILURE, 
    FETCH_OPINION_SUCCESS, 
    FETCH_OPINION_LOADING
} from '../actions/actionTypes';

import { initialOpinionAnalysis } from './initialState';

const opinionReducer = (state = initialOpinionAnalysis, action) => {
    switch (action.type) {
        case FETCH_OPINION_SUCCESS:
            console.log('i am successfull')
            return {
                ...state,
                opinionAnalysis: action.payload,
                opinionAnalysisLoading: false,
            };
        
        
        case FETCH_OPINION_FAILURE:
            return state;

        case FETCH_OPINION_LOADING:
            console.log('opinion loading')
            return {
                ...state,
                opinionAnalysisLoading: true,
            };
        default:
            return state;
    }
};

export default opinionReducer;
