import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';

import * as actions from '../actions';
import * as actionCreators from '../action-creators';
import { concatMap } from 'rxjs/operators';
import { Actions } from '../../actions';

export const resetAfterLogoutEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    ofType<Actions, actionCreators.LogoutUserSuccess['type'], actionCreators.LogoutUserSuccess>(
      actions.LOGOUT_USER_SUCCESS
    ),
    concatMap(() => {
      return [];
    })
  );
