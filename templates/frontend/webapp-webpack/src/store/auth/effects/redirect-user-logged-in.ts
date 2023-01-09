import { Observable } from 'rxjs';
import { Action } from 'redux';
import { Actions } from '../../actions';
import * as authActions from '../../auth/actions';
import { ofType, StateObservable } from 'redux-observable';
import { map, withLatestFrom } from 'rxjs/operators';
import { push } from 'connected-react-router';
import { LoginUserSuccess } from '../../auth/action-creators';
import AppState from '../../state';
import { isPublicRoute, isAuthRoute } from '@webapp/routes/utils';
import { NoOp } from '../../ui/action-creators';

export const redirectUserLoggedInEpic = (
  action$: Observable<Actions>,
  state$: StateObservable<AppState>
): Observable<Action> =>
  action$.pipe(
    ofType<Actions, LoginUserSuccess['type'], LoginUserSuccess>(authActions.LOGIN_USER_SUCCESS),
    withLatestFrom(state$),
    map((values) => values[1]),
    map((state) => {
      if (state.router.location.pathname !== '/') {
        if (
          (isPublicRoute(state.router.location.pathname) && !isAuthRoute(state.router.location.pathname)) ||
          !isAuthRoute(state.router.location.pathname)
        ) {
          return new NoOp();
        }
      }

      return push('/dashboard');
    })
  );
