import { CloseMenu } from '../action-creators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Action } from 'redux';
import { LOCATION_CHANGE } from 'redux-first-history';

export const closeMenusEpic = (action$: Observable<Action>): Observable<CloseMenu> =>
  action$.pipe(
    ofType(LOCATION_CHANGE),
    map(() => new CloseMenu())
  );
