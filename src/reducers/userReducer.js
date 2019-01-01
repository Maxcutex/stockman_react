import { LOAD_ACTIVE_USER_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

/**
 * User reducer
 *
 * @export
 * @param {object} [state= initialState.user]
 * @param {UserAction} action
 * @returns {object} state
 */
const userReducer = (state = initialState.activeUser, action) => {
    switch (action.type) {
        case LOAD_ACTIVE_USER_SUCCESS:
            return action.activeUser;
        default:
            return state;
    }
};
export default userReducer;
