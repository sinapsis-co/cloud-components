import { Observable } from 'rxjs';
import { ofType, StateObservable } from 'redux-observable';

import * as actions from '../actions';
import * as actionCreators from '../action-creators';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { Actions } from '../../actions';
import * as auth from '@webapp/sdk/auth';
import AppState from '../../state';

export const changePasswordEpic = (
  action$: Observable<Actions>,
  state$: StateObservable<AppState>
): Observable<Actions> =>
  action$.pipe(
    ofType<Actions, actionCreators.ChangePassword['type'], actionCreators.ChangePassword>(actions.CHANGE_PASSWORD),
    withLatestFrom(state$),
    mergeMap(async ([action, state]) => {
      try {
        // forgot password
        await auth.changePassword(state.auth.user, action.data.oldPassword, action.data.newPassword);
        return new actionCreators.ChangePasswordSuccess();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        return new actionCreators.ChangePasswordError(err.code, err.description);
      }
    })
  );
