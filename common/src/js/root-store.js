import rootReducer from './root-reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, promiseMiddleware()))
);

export default rootStore;