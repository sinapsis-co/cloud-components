import { createBrowserHistory } from 'history';
import { createStore, combineReducers, Dispatch, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import authReducer from './auth/reducer';
import uiReducer from './ui/reducer';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Actions } from './actions';
import AppState from './state';
import { composeWithDevTools } from 'redux-devtools-extension';
import authEpic from './auth/effects';
import uiEpic from './ui/effects';
import setupAmplifyIntegration from './auth/amplify-integration';

const epicMiddleware = createEpicMiddleware<Actions, Actions, AppState, unknown>();

const classMiddleware = () => (next: Dispatch<Actions>) => (action: Actions) => next({ ...action });

export const history = createBrowserHistory({
  basename: process.env.REACT_APP_BASENAME,
});

const store = createStore(
  combineReducers({
    router: connectRouter(history),
    ui: uiReducer,
    auth: authReducer,
  }),
  composeWithDevTools(applyMiddleware(classMiddleware, routerMiddleware(history), epicMiddleware))
);

epicMiddleware.run(combineEpics(authEpic, uiEpic));

setupAmplifyIntegration(store.dispatch);

export default store;
