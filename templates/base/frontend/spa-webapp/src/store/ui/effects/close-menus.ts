import { LOCATION_CHANGE } from 'connected-react-router';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CloseMenu } from '../action-creators';

export const closeMenusEpic = (action$: Observable<Action>): Observable<CloseMenu> =>
  action$.pipe(
    ofType(LOCATION_CHANGE),
    map(() => new CloseMenu())
  );
