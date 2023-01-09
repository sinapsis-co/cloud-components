import { RouterAction } from 'connected-react-router';
import { AuthActions } from './auth/action-creators';
import { ErrorAction } from './common/error-action';
import { LoadingAction } from './common/loading-action';
import { UIActions } from './ui/action-creators';

export type Actions = RouterAction | LoadingAction | ErrorAction | UIActions | AuthActions;
