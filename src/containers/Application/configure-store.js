import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, { initialState } from './root-reducer';
import { queryMiddleware } from 'redux-query';
import superagentInterface from 'redux-query-interface-superagent';

export const getQueries = (state) => state.queries;
export const getEntities = (state) => state.entities;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        queryMiddleware(superagentInterface, getQueries, getEntities),
      ),
    ),
  );
  return store;
}

export default configureStore;
