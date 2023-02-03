import { combineEpics } from 'redux-observable';
// import { createAccountEpic } from './create-account';
// import { verifyAccountEpic } from './verify-account';
// import { loginEpic } from './login';
import { Actions } from '../../actions';
import AppState from '../../state';

const authEpic = combineEpics<Actions, Actions, AppState>();
// createAccountEpic,
// verifyAccountEpic,
// loginEpic,

export default authEpic;
