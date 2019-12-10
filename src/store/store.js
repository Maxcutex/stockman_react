import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from '../reducers/rootReducer';

// import { tokenValidator } from '../helpers/tokenValidation';

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
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
};
export default configureStore;
