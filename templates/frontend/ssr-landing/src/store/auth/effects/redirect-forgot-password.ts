import { Observable } from 'rxjs';
import { Actions } from '../../actions';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { push } from 'connected-react-router';
import { ForgotPasswordSuccess, ForgotPasswordStartSuccess } from '../../auth/action-creators';
import { FORGOT_PASSWORD_START_SUCCESS, FORGOT_PASSWORD_SUCCESS } from '../../auth/actions';
import { NoOp } from '../../ui/action-creators';
import { Action } from 'redux';

export const redirectForgotPasswordEpic = (action$: Observable<Actions>): Observable<Action> =>
  action$.pipe(
    ofType<Actions, ForgotPasswordStartSuccess['type'] | ForgotPasswordSuccess['type']>(
      FORGOT_PASSWORD_START_SUCCESS,
      FORGOT_PASSWORD_SUCCESS
    ),
    map((action) => {
      if (action.type === FORGOT_PASSWORD_START_SUCCESS) {
        return push('/forgot-password/verify');
      }
      if (action.type === FORGOT_PASSWORD_SUCCESS) {
        return push('/sign-in');
      }
      return new NoOp();
    })
  );
