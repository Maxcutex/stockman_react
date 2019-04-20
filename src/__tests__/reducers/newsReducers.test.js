import newsReducer from '../../reducers/newsReducer';
import { initialNews } from '../../reducers/initialState';
import {
    FETCH_GENERAL_NEWS_SUCCESS,
    FETCH_FEATURED_NEWS_SUCCESS,
    FETCH_FEATURED_NEWS_FAILURE,
    FETCH_GENERAL_NEWS_FAILURE,
} from '../../actions/actionTypes';

describe('Menu Reducers', () => {
    it('FETCH_GENERAL_NEWS_SUCCESS: should set upcoming menus to state', () => {
        const payload = [
            {
                id: 1,
                meal: 'eba',
            },
        ];
        const action = {
            type: FETCH_GENERAL_NEWS_SUCCESS,
            payload,
        };
        const newState = newsReducer(initialNews, action);
        expect(newState.news).toEqual(action.payload);
    });
    it('FETCH_FEATURED_NEWS_SUCCESS: should set selected meal to state', () => {
        const payload = {
            prop: 'mainMeal',
            value: 1,
        };
        const action = {
            type: FETCH_FEATURED_NEWS_SUCCESS,
            payload,
        };
        const newState = newsReducer(initialNews, action);
        expect(newState.news).toEqual(action.payload);
    });
});
