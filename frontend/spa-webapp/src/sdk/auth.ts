import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { ICredentials } from '@aws-amplify/core';
import { ISignUpResult } from 'amazon-cognito-identity-js';
import { Auth } from 'aws-amplify';

import { AccountVerificationData } from '../types/auth/account-verification-data';
import { BasicAccountData } from '../types/auth/basic-account-data';

export const isLoggedIn = async (): Promise<boolean> => {
  try {
    await Auth.currentAuthenticatedUser();
  } catch {
    return false;
  }

  return true;
};

export const getUser = async (): Promise<unknown> => {
  try {
    return await Auth.currentAuthenticatedUser();
  } catch (e) {
    // unauthenticated
  }
};

export const getToken = async (): Promise<string | void> => {
  const user = await getUser();

  if (user) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (user as any).signInUserSession.idToken.jwtToken;
  }
};

export const getAccountName = (email: string): string => {
  return email;
};

export const signup = async (
  data: BasicAccountData
): Promise<{ account: string; response: ISignUpResult } | undefined> => {
  const { password, ...attributes } = data;

  const account = getAccountName(attributes.email);

  try {
    const response = await Auth.signUp({
      username: account,
      password,
      attributes,
    });

    return {
      account,
      response,
    };
  } catch {
    // pass-through
  }
};

export const socialSignInStart = async (provider: CognitoHostedUIIdentityProvider): Promise<ICredentials> => {
  return await Auth.federatedSignIn({ provider });
};

export const confirm = async (data: AccountVerificationData): Promise<unknown> => {
  return await Auth.confirmSignUp(data.account, data.code);
};

export const login = async (data: BasicAccountData): Promise<void> => {
  const username = data.email;

  try {
    await Auth.signIn(username, data.password);
  } catch {
    // pass-through
  }
};

export const logout = async (): Promise<void> => {
  try {
    await Auth.signOut();
  } catch {
    // pass-through
  }
};

export const changePassword = async (user: unknown, oldPassword: string, newPassword: string): Promise<'SUCCESS'> => {
  return await Auth.changePassword(user, oldPassword, newPassword);
};

export const startForgotPassword = async (username: string): Promise<unknown> => {
  return await Auth.forgotPassword(username);
};

export const finishForgotPassword = async (username: string, code: string, newPassword: string): Promise<void> => {
  await Auth.forgotPasswordSubmit(username, code, newPassword);
};

export const resendCode = async (username: string): Promise<unknown> => {
  return await Auth.resendSignUp(username);
};
