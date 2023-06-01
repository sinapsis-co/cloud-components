// HINT: These properties are included in the access token.

export type UserCognito = {
  standard: {
    sub: string;
    email: string;
    given_name: string;
    family_name: string;
  };
  custom: {
    // orgName: string;
  };
};

export type UserClaims = UserCognito['custom'] & UserCognito['standard'];
