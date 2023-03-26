// HINT: These properties are included in the access token.

import { AuthScope } from '../platform/authorization';

export type UserCognito = {
  standard: {
    sub: string;
    email: string;
    given_name: string;
    family_name: string;
  };
  custom: {
    tenantId: string;
    companyName: string;
    role: AuthScope;
  };
};

export type UserClaims = UserCognito['custom'] & UserCognito['standard'];
