import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { authStoreActions } from './actions';
import { initialAuthStoreState } from './initial-state';
import { AuthStore } from './types';

const authStore: StateCreator<AuthStore, [['zustand/devtools', never]]> = (set, get) => ({
  ...initialAuthStoreState,
  ...authStoreActions(set, get),
});

export const useAuthStore = create<AuthStore>()(devtools(persist(authStore, { name: 'auth-store' })));
