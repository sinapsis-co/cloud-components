import { Observable } from 'rxjs';
import { Actions } from '../../actions';
import * as authActionCreators from '../../auth/action-creators';
import * as authActions from '../../auth/actions';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { push } from 'connected-react-router';
import { Action } from 'redux';

export const redirectVerificationSuccessEpic = (action$: Observable<Actions>): Observable<Action> =>
  action$.pipe(
    ofType<Actions, authActionCreators.VerifyAccountSuccess['type'], authActionCreators.VerifyAccountSuccess>(
      authActions.VERIFY_ACCOUNT_SUCCESS
    ),
    map(() => {
      return push('/sign-in');
    })
  );
