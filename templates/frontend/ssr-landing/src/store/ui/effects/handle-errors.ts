import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ShowError } from '../action-creators';
import { ErrorAction } from '../../common/error-action';
import { getActionKey } from '../../common/get-action-key';
import { Actions } from '../../actions';

export const handleErrorsEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    filter((action) => (action as ErrorAction).isError),
    map((action) => new ShowError(getActionKey(action as ErrorAction), (action as ErrorAction).code))
  );
