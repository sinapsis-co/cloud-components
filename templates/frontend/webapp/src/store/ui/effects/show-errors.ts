import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ErrorAction } from '../../common/error-action';
import { NoOp } from '../action-creators';
import { Actions } from '../../actions';

export const showErrorsEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    filter((action) => (action as ErrorAction).isError && !(action as ErrorAction).code.includes('NOT_FOUND')),
    map(() => new NoOp())
  );
