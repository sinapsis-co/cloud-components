import { push } from 'connected-react-router';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actions } from '../../actions';
import * as authActionCreators from '../action-creators';
import * as authActions from '../actions';

export const redirectRegistrationSuccessEpic = (action$: Observable<Actions>): Observable<Action> =>
  action$.pipe(
    ofType<Actions, authActionCreators.CreateAccountSuccess['type'], authActionCreators.CreateAccountSuccess>(
      authActions.CREATE_ACCOUNT_SUCCESS
    ),
    map(() => push('/sign-in'))
  );
