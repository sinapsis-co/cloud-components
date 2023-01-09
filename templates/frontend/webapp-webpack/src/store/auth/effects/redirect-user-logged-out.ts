import { Observable } from 'rxjs';
import { Actions } from '../../actions';
import { ofType, StateObservable } from 'redux-observable';
import { map, withLatestFrom } from 'rxjs/operators';
import { push } from 'connected-react-router';
import AppState from '../../state';
import { LogoutUserSuccess } from '../../auth/action-creators';
import { LOGOUT_USER_SUCCESS } from '../../auth/actions';
import { isPublicRoute } from '../../../routes/utils';
import { NoOp } from '../../ui/action-creators';
import { Action } from 'redux';

export const redirectUserLoggedOutEpic = (
  action$: Observable<Actions>,
  state$: StateObservable<AppState>
): Observable<Action> =>
  action$.pipe(
    ofType<Actions, LogoutUserSuccess['type'], LogoutUserSuccess>(LOGOUT_USER_SUCCESS),
    withLatestFrom(state$),
    map((values) => values[1]),
    map((state) => {
      if (isPublicRoute(state.router.location.pathname)) {
        return new NoOp();
      }
      return push('/sign-in');
    })
  );
