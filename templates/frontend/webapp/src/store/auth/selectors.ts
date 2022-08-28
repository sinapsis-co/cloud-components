import AppState from '../state';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const userProfile = (state: AppState): any => state.auth.user?.attributes;

export const userFullName = (state: AppState): string => {
  const profile = userProfile(state);

  return `${profile?.given_name || ''} ${profile?.family_name || ''}`;
};

export const selectIsOwner = (state: AppState): boolean => {
  return state.auth.user?.signInUserSession?.idToken?.payload?.isOwner === 'true';
};
