import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';

import * as actions from '../actions';
import * as actionCreators from '../action-creators';
import { mergeMap } from 'rxjs/operators';
import { Actions } from '../../actions';
import * as auth from '@webapp/sdk/auth';

export const resendCodeEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    ofType<Actions, actionCreators.ResendCode['type'], actionCreators.ResendCode>(actions.RESEND_CODE),
    mergeMap(async (action) => {
      try {
        await auth.resendCode(action.username);

        return new actionCreators.ResendCodeSuccess();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        return new actionCreators.ResendCodeError(err.code, err.message);
      }
    })
  );
