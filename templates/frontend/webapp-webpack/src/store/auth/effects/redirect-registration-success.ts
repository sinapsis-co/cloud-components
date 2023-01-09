import { Observable } from 'rxjs';
import { Actions } from '../../actions';
import * as authActionCreators from '../../auth/action-creators';
import * as authActions from '../../auth/actions';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { push } from 'connected-react-router';
import { Action } from 'redux';

export const redirectRegistrationSuccessEpic = (action$: Observable<Actions>): Observable<Action> =>
  action$.pipe(
    ofType<Actions, authActionCreators.CreateAccountSuccess['type'], authActionCreators.CreateAccountSuccess>(
      authActions.CREATE_ACCOUNT_SUCCESS
    ),
    map(() => push('/sign-in'))
  );
