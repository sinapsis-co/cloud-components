import { ErrorAction } from './error-action';
import { LoadingAction } from './loading-action';

export const getActionKey = (action: LoadingAction | ErrorAction): string => {
  if (action.getActionKey) {
    return action.getActionKey();
  }

  return action.type
    .replace(/Success$/i, '')
    .replace(/Error$/i, '')
    .trim();
};
