import { push } from 'connected-react-router';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actions } from '../../actions';
import * as authActionCreators from '../action-creators';
import * as authActions from '../actions';

export const redirectVerificationSuccessEpic = (action$: Observable<Actions>): Observable<Action> =>
  action$.pipe(
    ofType<Actions, authActionCreators.VerifyAccountSuccess['type'], authActionCreators.VerifyAccountSuccess>(
      authActions.VERIFY_ACCOUNT_SUCCESS
    ),
    map(() => {
      return push('/sign-in');
    })
  );
