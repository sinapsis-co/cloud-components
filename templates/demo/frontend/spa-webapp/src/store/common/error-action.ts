import { Action } from 'redux';

export interface ErrorAction extends Action {
  code: string;
  description: string | string[];
  isError: true;

  getActionKey?: () => string;
}
