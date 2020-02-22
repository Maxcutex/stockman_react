import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from '../reducers/rootReducer';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' 

// import { tokenValidator } from '../helpers/tokenValidation';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};
/**
 * @export
 * @param {any} {}
 * @returns {object} object
 */

// const persistConfig = {
//     key: 'root',
//     storage,
//   }
const middleware = [thunk];  
// const persistedReducer = persistReducer(persistConfig, rootReducer)
// const configureStore = () => {
    
//     return createStore(
//         persistedReducer,
//         initialState,
//         composeEnhancers(applyMiddleware(...middleware))
//     );
// };

    let store = createStore(
           // persistedReducer,
            rootReducer,
            initialState,
            composeEnhancers(applyMiddleware(...middleware))
        );
   
    //let persistor = persistStore(store)
    

export  { store };
