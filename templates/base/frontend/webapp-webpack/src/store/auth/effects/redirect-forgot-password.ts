import { push } from 'connected-react-router';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actions } from '../../actions';
import { NoOp } from '../../ui/action-creators';
import { ForgotPasswordStartSuccess, ForgotPasswordSuccess } from '../action-creators';
import { FORGOT_PASSWORD_START_SUCCESS, FORGOT_PASSWORD_SUCCESS } from '../actions';

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
