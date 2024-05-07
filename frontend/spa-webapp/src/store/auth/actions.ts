import { initialAuthStoreState } from './initial-state';
import { AuthStoreActions, AuthStoreGetter, AuthStoreSetter } from './types';

const AUTH_ACTIONS = Object.seal({
  RESET_AUTH_STORE: 'AUTH STORE: Reset auth store',
  SET_USER_DATA: 'AUTH STORE: Set user data',
  SET_LOGGED_IN: 'AUTH STORE: Set logged in',
});

export const authStoreActions = (set: AuthStoreSetter, get: AuthStoreGetter): AuthStoreActions => ({
  resetAuthStore: () => {
    return set({ ...initialAuthStoreState }, false, AUTH_ACTIONS.RESET_AUTH_STORE);
  },
  setUserData: (userData) => {
    return set({ userData }, false, AUTH_ACTIONS.SET_USER_DATA);
  },
  setLoggedIn: (loggedIn) => {
    return set({ loggedIn }, false, AUTH_ACTIONS.SET_LOGGED_IN);
  },
});
