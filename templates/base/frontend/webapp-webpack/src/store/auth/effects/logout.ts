import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';

import * as actions from '../actions';
import * as actionCreators from '../action-creators';
import { mergeMap } from 'rxjs/operators';
import { Actions } from '../../actions';
import * as auth from '@webapp/sdk/auth';
import { NoOp } from '../../ui/action-creators';

export const logoutEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    ofType<Actions, actionCreators.LogoutUser['type']>(actions.LOGOUT_USER),
    mergeMap(async () => {
      await auth.logout();

      return new NoOp();
    })
  );
