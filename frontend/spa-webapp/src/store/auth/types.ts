export interface AuthStoreState {
  loggedIn: boolean;
  userData: unknown | null;
}

export interface AuthStoreActions {
  resetAuthStore: () => void;
  setUserData: (userData: unknown | null) => void;
  setLoggedIn: (loggedIn: boolean) => void;
}

export type AuthStore = AuthStoreState & AuthStoreActions;

export type AuthStoreSetter = <A extends string>(
  partial: AuthStore | Partial<AuthStore> | ((state: AuthStore) => AuthStore | Partial<AuthStoreState>),
  replace?: boolean | undefined,
  action?: A | undefined
) => void;

export type AuthStoreGetter = () => AuthStore;
