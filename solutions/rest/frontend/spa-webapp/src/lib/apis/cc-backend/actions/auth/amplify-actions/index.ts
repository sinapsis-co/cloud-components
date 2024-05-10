import { getCurrentUser, signIn, signInWithRedirect } from 'aws-amplify/auth';
import {
  AuthSession,
  AuthUser,
  SendUserAttributeVerificationCodeOutput,
  SignInOutput,
  SignUpOutput,
  UserAttributeKey,
  VerifiableUserAttributeKey,
  confirmResetPassword,
  confirmSignUp,
  fetchAuthSession,
  resendSignUpCode,
  resetPassword,
  sendUserAttributeVerificationCode,
  signOut,
  signUp,
  updatePassword,
} from 'aws-amplify/auth';

import {
  AuthConfirmSignUpInput,
  AuthSignInWithRedirectInput,
  AuthUserAttributes,
} from '@aws-amplify/auth/dist/esm/types';
import { ResourcesConfig } from '@aws-amplify/core';

import { BasicAccountData } from '@webapp/types/auth/basic-account-data';

export const config: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env?.REACT_APP_COGNITO_USER_POOL_ID || '',
      userPoolClientId: process.env?.REACT_APP_COGNITO_WEB_CLIENT_ID || '',
      loginWith: {
        oauth: {
          domain: process.env.REACT_APP_COGNITO_DOMAIN?.replace('https://', '') || '',
          redirectSignIn: [`${window.location.protocol}//${window.location.host}`],
          redirectSignOut: [`${window.location.protocol}//${window.location.host}/sign-in`],
          responseType: 'code',
          scopes: ['email', 'profile', 'openid'],
          providers: ['Google'],
        },
      },
    },
  },
};

export const isLoggedIn = async (): Promise<boolean> => {
  try {
    await getCurrentUser();
  } catch {
    return false;
  }

  return true;
};

export const getUser = async (): Promise<AuthUser | null> => {
  try {
    return await getCurrentUser();
  } catch (e) {
    return null;
  }
};

export const getSession = async (): Promise<AuthSession | null> => {
  try {
    return await fetchAuthSession();
  } catch (e) {
    return null;
  }
};

export const getToken = async (): Promise<string | void> => {
  const token = (await fetchAuthSession()).tokens?.idToken?.toString();

  return token;
};

export const getAccountName = (email: string): string => {
  return email;
};

export const signup = (data: BasicAccountData): Promise<SignUpOutput> => {
  const { password, ...attributes } = data;

  const username = getAccountName(attributes.email);

  const userAttributes: AuthUserAttributes<UserAttributeKey> = {};

  Object.keys(attributes).map((key) => {
    if (attributes[key as keyof typeof attributes] === undefined) {
      return;
    }

    userAttributes[key] = attributes[key as keyof typeof attributes];
  });

  return signUp({ username, password, options: { userAttributes } });
};

export const login = async (data: BasicAccountData): Promise<SignInOutput> => {
  const result = await signIn({ username: data.email, password: data.password });

  return result;
};

export const logout = async (): Promise<void> => {
  return signOut();
};

export const sendVerificationCode = async (
  userAttributeKey: VerifiableUserAttributeKey = 'email'
): Promise<SendUserAttributeVerificationCodeOutput> => {
  return await sendUserAttributeVerificationCode({ userAttributeKey });
};

export const verifyAccount = async (verificationData: AuthConfirmSignUpInput): Promise<unknown> => {
  return await confirmSignUp(verificationData);
};

export const changePassword = async (oldPassword: string, newPassword: string): Promise<void> => {
  return await updatePassword({ oldPassword, newPassword });
};

export const startForgotPassword = async (username: string) => {
  return await resetPassword({ username });
};

export const finishForgotPassword = async (username: string, code: string, newPassword: string): Promise<void> => {
  return await confirmResetPassword({ username, newPassword, confirmationCode: code });
};

export const resendCode = async (username: string) => {
  return resendSignUpCode({ username });
};

export const socialSignInStart = async (provider: AuthSignInWithRedirectInput): Promise<void> => {
  return await signInWithRedirect(provider);
};

export const socialSignUpStart = async (provider: AuthSignInWithRedirectInput): Promise<void> => {
  return await signInWithRedirect(provider);
};
