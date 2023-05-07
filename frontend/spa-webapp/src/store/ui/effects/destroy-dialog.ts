import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { DestroyDialog, CloseDialog } from '../action-creators';
import { ofType } from 'redux-observable';
import { CLOSE_DIALOG } from '../actions';
import { Actions } from '../../actions';

export const destroyDialogEpic = (action$: Observable<Actions>): Observable<Actions> =>
  action$.pipe(
    ofType(CLOSE_DIALOG),
    delay(300),
    map((action) => new DestroyDialog((action as CloseDialog).key))
  );
