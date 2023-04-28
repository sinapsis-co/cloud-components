import { Action } from 'redux';

export interface LoadingAction extends Action {
  readonly mainLoader?: boolean;
  readonly isLoading: boolean;

  getActionKey?: () => string;
}
