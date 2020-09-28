import { combineReducers } from 'redux';
import { entitiesReducer, queriesReducer } from 'redux-query';
// Get all reducers initial values together
import userReducerInitialState from '@containers/User/reducer';

export const initialState = {
  entities: {
    user: userReducerInitialState,
  },
};

const rootReducer = combineReducers({
  entities: entitiesReducer,
  queries: queriesReducer,
});

export default rootReducer;
