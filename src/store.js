import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import {
  persistStore,
  persistReducer
} from 'redux-persist'

//import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import {
  persistConfig,
  rootReducer
} from './reducers'

const initialState = {};
const middleware = [thunk];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  enhancer
)

export const persistor = persistStore(store)

// export default createStore(
//   rootReducer,
//   initialState,
//   enhancer
// )