import { isAuthRoute, isPublicRoute } from '@webapp/routes/utils';
import { push } from 'connected-react-router';
import { Action } from 'redux';
import { ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { Actions } from '../../actions';
import AppState from '../../state';
import { NoOp } from '../../ui/action-creators';
import { LoginUserSuccess } from '../action-creators';
import * as authActions from '../actions';

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
