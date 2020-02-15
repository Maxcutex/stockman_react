import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from '../reducers/rootReducer';

// import { tokenValidator } from '../helpers/tokenValidation';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};
/**
 * @export
 * @param {any} {}
 * @returns {object} object
 */
const configureStore = () => {
    const middleware = [thunk];
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );
};
export default configureStore;
