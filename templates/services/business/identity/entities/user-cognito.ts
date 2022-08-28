// HINT: These are the properties includes in the access token.
// If you don't need multi tenancy, remove the tenantId everywhere.

export type UserCognito = {
  standard: {
    sub: string;
    email: string;
    given_name: string;
    family_name: string;
  };
  custom: {
    tenantId: string;
    role: string;
    permission: string;
    companyName: string;
  };
};

export type UserClaims = UserCognito['custom'] & UserCognito['standard'];
