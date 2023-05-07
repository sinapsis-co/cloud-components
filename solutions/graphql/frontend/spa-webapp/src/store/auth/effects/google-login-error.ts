import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';

import * as actions from '../actions';
import { GoogleLoginUserError } from '../action-creators';
import { map } from 'rxjs/operators';
import { Actions } from '../../actions';
import { ShowError } from '../../ui/action-creators';

export const googleLoginErrorEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    ofType<Actions, GoogleLoginUserError['type'], GoogleLoginUserError>(actions.LOGIN_USER_ERROR_GOOGLE),
    map((action) => {
      return new ShowError(action.type, action.code);
    })
  );
