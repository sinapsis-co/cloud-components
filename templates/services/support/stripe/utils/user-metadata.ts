import { UserClaims } from 'services/business/identity/entities/user-cognito';

export const metaDataUser = (user: UserClaims): Record<string, string> => {
  return {
    email: user.email,
    familyName: user.family_name,
    givenName: user.given_name,
    sub: user.sub,
    tenantId: user.tenantId,
  };
};
