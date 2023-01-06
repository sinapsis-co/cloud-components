import { createStore, combineReducers, Dispatch, applyMiddleware } from 'redux';
// import { connectRouter, routerMiddleware } from "connected-react-router";
import authReducer from './auth/reducer';
import uiReducer from './ui/reducer';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Actions } from './actions';
import AppState from './state';
import { composeWithDevTools } from 'redux-devtools-extension';
import authEpic from './auth/effects';
import uiEpic from './ui/effects';
import { createReduxHistoryContext } from 'redux-first-history';

import { createBrowserHistory } from 'history';
import { localizeReducer } from 'react-localize-redux';

const epicMiddleware = createEpicMiddleware<Actions, Actions, AppState, unknown>();

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  //other options if needed
});

const classMiddleware = () => (next: Dispatch<Actions>) => (action: Actions) => next({ ...action });

const store = createStore(
  combineReducers({
    router: routerReducer,
    ui: uiReducer,
    auth: authReducer,
    localize: localizeReducer,
  }),
  composeWithDevTools(applyMiddleware(classMiddleware, routerMiddleware, epicMiddleware))
);

epicMiddleware.run(combineEpics(authEpic, uiEpic));

export const history = createReduxHistory(store);
export default store;
