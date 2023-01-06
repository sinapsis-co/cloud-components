import { RouterState } from 'connected-react-router';
import { History } from 'history';
import AuthState from './auth/state';
import { UIState } from './ui/state';

export interface AppState {
  router: RouterState<History>;
  ui: UIState;
  auth: AuthState;
}

export default AppState;
