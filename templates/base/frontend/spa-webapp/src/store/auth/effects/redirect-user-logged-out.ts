import { push } from 'connected-react-router';
import { Action } from 'redux';
import { ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { isPublicRoute } from '../../../routes/utils';
import { Actions } from '../../actions';
import AppState from '../../state';
import { NoOp } from '../../ui/action-creators';
import { LogoutUserSuccess } from '../action-creators';
import { LOGOUT_USER_SUCCESS } from '../actions';

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
