import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { LOCATION_CHANGE } from 'redux-first-history';
import { Actions } from '../../actions';
import { NoOp } from '../action-creators';

export const scrollTopEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    ofType(LOCATION_CHANGE),
    map(() => {
      window.scrollTo(0, 1);
      return new NoOp();
    }),
    filter(() => false)
  );
