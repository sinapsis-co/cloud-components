import { Observable } from 'rxjs';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { ofType, StateObservable } from 'redux-observable';
import { Actions } from '../../actions';
import * as actions from '../actions';
import * as actionCreators from '../action-creators';
import * as auth from '@webapp/sdk/auth';
import AppState from '../../state';

export const verifyAccountEpic = (
  action$: Observable<Actions>,
  state$: StateObservable<AppState>
): Observable<Actions> =>
  action$.pipe(
    ofType<Actions, actionCreators.VerifyAccount['type'], actionCreators.VerifyAccount>(actions.VERIFY_ACCOUNT),
    withLatestFrom(state$),
    mergeMap(([action, state]) =>
      auth
        .confirm(action.data)
        .then(() => {
          if (state.auth.registrationData) {
            return new actionCreators.LoginUser(state.auth.registrationData, true);
          } else {
            return new actionCreators.VerifyAccountSuccess();
          }
        })
        .catch(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (err: any) => new actionCreators.VerifyAccountError(err.code, err.message)
        )
    )
  );
