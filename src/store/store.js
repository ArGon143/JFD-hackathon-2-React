import { legacy_createStore as createStore, compose } from 'redux';
import usersReducer from './user-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(usersReducer, composeEnhancers());