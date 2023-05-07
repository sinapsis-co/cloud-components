import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';

import * as actions from '../actions';
import * as actionCreators from '../action-creators';
import { mergeMap } from 'rxjs/operators';
import { Actions } from '../../actions';
import * as auth from '@webapp/sdk/auth';
import { NoOp } from '../../ui/action-creators';

export const forgotPasswordEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    ofType<
      Actions,
      actionCreators.ForgotPasswordStart['type'] | actionCreators.ForgotPassword['type'],
      actionCreators.ForgotPasswordStart | actionCreators.ForgotPassword
    >(actions.FORGOT_PASSWORD_START, actions.FORGOT_PASSWORD),
    mergeMap(async (action) => {
      if (action.type === actions.FORGOT_PASSWORD) {
        try {
          await auth.finishForgotPassword(action.data.username!, action.data.code, action.data.newPassword);
          return new actionCreators.ForgotPasswordSuccess();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          return new actionCreators.ForgotPasswordError(err.code, err.description);
        }
      }
      if (action.type === actions.FORGOT_PASSWORD_START) {
        try {
          await auth.startForgotPassword(action.username);
          return new actionCreators.ForgotPasswordStartSuccess(action.username);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          return new actionCreators.ForgotPasswordStartError(err.code, err.message);
        }
      }
      return new NoOp();
    })
  );
