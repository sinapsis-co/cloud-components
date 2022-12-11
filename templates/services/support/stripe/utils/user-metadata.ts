import { UserClaims } from 'services/identity/entities';

export const metaDataUser = (user: UserClaims): Record<string, string> => {
  return {
    email: user.email,
    familyName: user.family_name,
    givenName: user.given_name,
    sub: user.sub,
  };
};
