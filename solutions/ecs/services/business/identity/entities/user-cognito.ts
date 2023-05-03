// HINT: These properties are included in the access token.

export type UserCognito = {
  standard: {
    sub: string;
    email: string;
    given_name: string;
    family_name: string;
  };
};

export type UserClaims = UserCognito['standard'];
