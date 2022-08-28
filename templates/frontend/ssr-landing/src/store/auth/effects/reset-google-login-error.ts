import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';

import * as actions from '../actions';
import { map } from 'rxjs/operators';
import { Actions } from '../../actions';
import { ResetError } from '../../ui/action-creators';
import { LoginUserError, LoginUserSuccess } from '../action-creators';

export const resetGoogleLoginErrorEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    ofType<Actions, LoginUserSuccess['type'] | LoginUserError['type']>(
      actions.LOGIN_USER_SUCCESS,
      actions.LOGIN_USER_ERROR
    ),
    map(() => {
      return new ResetError(actions.LOGIN_USER_ERROR_GOOGLE);
    })
  );
