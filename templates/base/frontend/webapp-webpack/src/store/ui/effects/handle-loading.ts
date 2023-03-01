import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { StartLoading, FinishLoading } from '../action-creators';
import { LoadingAction } from '../../common/loading-action';
import { ErrorAction } from '../../common/error-action';
import { getActionKey } from '../../common/get-action-key';
import { Actions } from '../../actions';

export const startLoadingEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    filter((action) => (action as LoadingAction).isLoading),
    map((action) => new StartLoading(getActionKey(action as LoadingAction), (action as LoadingAction).mainLoader))
  );

export const endLoadingEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    filter((action) => (action as LoadingAction).isLoading === false || (action as ErrorAction).isError),
    map((action) => new FinishLoading(getActionKey(action as LoadingAction)))
  );
