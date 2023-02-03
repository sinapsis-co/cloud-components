import AppState from '../state';

export const showMainLoader = (state: AppState): boolean => {
  return !!Object.values(state.ui.loading).filter((type) => type === 'main').length;
};

export const isLoading = (state: AppState, actionName?: string): boolean => {
  if (actionName) {
    return !!state.ui.loading[actionName];
  }

  return Object.values(state.ui.loading).some((v) => !!v);
};
