import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import tablesReducer from './tablesRedux';
import { initialTableState } from './tablesRedux';

// define reducers
const reducers = {
  tables: tablesReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialTableState).forEach((item) => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialTableState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
