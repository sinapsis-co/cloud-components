import { RouterActions } from 'redux-first-history';
import { AuthActions } from './auth/action-creators';
import { ErrorAction } from './common/error-action';
import { LoadingAction } from './common/loading-action';
import { UIActions } from './ui/action-creators';

export type Actions = RouterActions | LoadingAction | ErrorAction | UIActions | AuthActions;
