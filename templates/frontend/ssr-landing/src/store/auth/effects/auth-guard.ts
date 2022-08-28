import { Observable } from 'rxjs';
import { ofType, StateObservable } from 'redux-observable';
import { map, withLatestFrom, filter, debounceTime } from 'rxjs/operators';
import { LocationChangeAction, LOCATION_CHANGE, replace } from 'connected-react-router';
import AppState from '../../state';
import * as auth from '@webapp/sdk/auth';
import { Actions } from '../../actions';
import { isPublicRoute } from '../../../routes/utils';

export const authGuardEpic = (action$: Observable<Actions>, state$: StateObservable<AppState>): Observable<Actions> =>
  action$.pipe(
    ofType<Actions, LocationChangeAction['type'], LocationChangeAction>(LOCATION_CHANGE),
    debounceTime(100),
    withLatestFrom(state$, auth.isLoggedIn()),
    map((values) => values[1]),
    filter((state) => {
      if (state.auth.loggedIn) {
        return false;
      }

      return !isPublicRoute(state.router.location.pathname);
    }),
    map(() => replace('/sign-in'))
  );
