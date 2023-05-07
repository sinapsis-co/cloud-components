import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';

import * as actions from '../actions';
import * as actionCreators from '../action-creators';
import { mergeMap } from 'rxjs/operators';
import { Actions } from '../../actions';
import * as auth from '@webapp/sdk/auth';
import { NoOp } from '../../ui/action-creators';

export const loginEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    ofType<Actions, actionCreators.LoginUser['type'], actionCreators.LoginUser>(actions.LOGIN_USER),
    mergeMap((action) => auth.login(action.data).then(() => new NoOp()))
  );
