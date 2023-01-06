import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { LOGOUT_USER_SUCCESS } from '../../auth/actions';
import { ResetUI } from '../action-creators';
import { Actions } from '../../actions';

export const resetAfterLogoutEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    ofType(LOGOUT_USER_SUCCESS),
    map(() => new ResetUI())
  );
