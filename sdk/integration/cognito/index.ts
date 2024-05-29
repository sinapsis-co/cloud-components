import {
  AdminCreateUserCommand,
  AdminCreateUserCommandInput,
  AdminCreateUserCommandOutput,
  AdminDeleteUserCommand,
  AdminDeleteUserCommandOutput,
  AdminDisableUserCommand,
  AdminDisableUserCommandOutput,
  AdminEnableUserCommand,
  AdminEnableUserCommandOutput,
  AdminGetUserCommand,
  AdminGetUserCommandOutput,
  AdminLinkProviderForUserCommand,
  AdminSetUserPasswordCommand,
  AdminUpdateUserAttributesCommand,
  AdminUpdateUserAttributesCommandInput,
  AdminUpdateUserAttributesCommandOutput,
  AttributeType,
  CognitoIdentityProviderClient,
  ConfirmForgotPasswordCommand,
  ConfirmSignUpCommand,
  ForgotPasswordCommand,
  GetUserCommand,
  ResendConfirmationCodeCommand,
} from '@aws-sdk/client-cognito-identity-provider';

import { Tracing, traceableFunction } from 'tracing';

export const cognito: CognitoIdentityProviderClient = Tracing.captureIntegration(new CognitoIdentityProviderClient({}) as any);

export type AttributeListType = AdminUpdateUserAttributesCommandInput['UserAttributes'];

export const deleteCognitoUser = async (username: string, userPoolId = process.env.USER_POOL_ID): Promise<AdminDeleteUserCommandOutput> => {
  const cmd = () => {
    return cognito.send(new AdminDeleteUserCommand({ UserPoolId: userPoolId, Username: username }));
  };
  return traceableFunction('DeleteCognitoUser', 'FAULT_COG_DELETE_USER', username, cmd);
};

export const updateCognitoUser = async (
  username: string,
  attributes: AttributeListType,
  userPoolId = process.env.USER_POOL_ID
): Promise<AdminUpdateUserAttributesCommandOutput> => {
  const cmd = () => {
    return cognito.send(
      new AdminUpdateUserAttributesCommand({
        UserPoolId: userPoolId,
        Username: username,
        UserAttributes: attributes,
      })
    );
  };
  return traceableFunction('UpdateCognitoUser', 'FAULT_COG_UPDATE_USER', username, cmd);
};

export const disableCognitoUser = async (username: string, userPoolId = process.env.USER_POOL_ID): Promise<AdminDisableUserCommandOutput> => {
  const cmd = () => {
    return cognito.send(
      new AdminDisableUserCommand({
        UserPoolId: userPoolId,
        Username: username,
      })
    );
  };
  return traceableFunction('DisableCognitoUser', 'FAULT_COG_DISABLE_USER', username, cmd);
};
export const enableCognitoUser = async (username: string, userPoolId = process.env.USER_POOL_ID): Promise<AdminEnableUserCommandOutput> => {
  const cmd = () => {
    return cognito.send(
      new AdminEnableUserCommand({
        UserPoolId: userPoolId,
        Username: username,
      })
    );
  };
  return traceableFunction('UpdateCognitoUser', 'FAULT_COG_ENABLE_USER', username, cmd);
};

export const confirmSignUp = async (
  username: string,
  code: string,
  userPoolClientId = process.env.USER_POOL_CLIENT_ID
): Promise<AdminEnableUserCommandOutput> => {
  const cmd = () => {
    return cognito.send(
      new ConfirmSignUpCommand({
        Username: username,
        ClientId: userPoolClientId,
        ConfirmationCode: code,
      })
    );
  };
  return traceableFunction('UpdateCognitoUser', 'FAULT_COG_CONFIRM_SIGN_UP', username, cmd);
};

export const forgotPassword = async (username: string, userPoolClientId = process.env.USER_POOL_CLIENT_ID): Promise<AdminEnableUserCommandOutput> => {
  const cmd = () => {
    return cognito.send(
      new ForgotPasswordCommand({
        Username: username,
        ClientId: userPoolClientId,
      })
    );
  };
  return traceableFunction('UpdateCognitoUser', 'FAULT_COG_FORGOT_PASSWORD', username, cmd);
};

export const confirmForgotPassword = async (
  username: string,
  password: string,
  code: string,
  userPoolClientId = process.env.USER_POOL_CLIENT_ID
): Promise<AdminEnableUserCommandOutput> => {
  const cmd = () => {
    return cognito.send(
      new ConfirmForgotPasswordCommand({
        Username: username,
        Password: password,
        ConfirmationCode: code,
        ClientId: userPoolClientId,
      })
    );
  };
  return traceableFunction('UpdateCognitoUser', 'FAULT_COG_CONFIRM_FORGOT_PASSWORD', username, cmd);
};

export const resendConfirmationCode = async (
  username: string,
  userPoolClientId = process.env.USER_POOL_CLIENT_ID
): Promise<AdminEnableUserCommandOutput> => {
  const cmd = () => {
    return cognito.send(
      new ResendConfirmationCodeCommand({
        Username: username,
        ClientId: userPoolClientId,
      })
    );
  };
  return traceableFunction('UpdateCognitoUser', 'FAULT_COG_RESEND_CONFIRMATION_CODE', username, cmd);
};

export const linkProvider = async (
  username: string,
  provider: string,
  federatedId: string,
  userPoolId = process.env.USER_POOL_ID
): Promise<AdminEnableUserCommandOutput> => {
  const cmd = () => {
    return cognito.send(
      new AdminLinkProviderForUserCommand({
        UserPoolId: userPoolId,
        DestinationUser: {
          ProviderName: 'COGNITO',
          ProviderAttributeValue: username,
        },
        SourceUser: {
          ProviderAttributeName: 'Cognito_Subject',
          ProviderName: provider,
          ProviderAttributeValue: federatedId,
        },
      })
    );
  };
  return traceableFunction('LinkCognitoProvider', 'FAULT_COG_RESEND_CONFIRMATION_CODE', username, cmd);
};

export const getUser = async (username: string, userPoolId = process.env.USER_POOL_ID): Promise<AdminGetUserCommandOutput> => {
  const cmd = () => {
    return cognito.send(
      new AdminGetUserCommand({
        Username: username,
        UserPoolId: userPoolId,
      })
    );
  };
  return traceableFunction('GetCognitoUser', 'FAULT_COG_RESEND_CONFIRMATION_CODE', username, cmd);
};

export const createUser = async (
  username: string,
  userAtt: AttributeType[],
  userPoolId = process.env.USER_POOL_ID
): Promise<AdminCreateUserCommandOutput> => {
  const cmd = () => {
    return cognito.send(
      new AdminCreateUserCommand({
        Username: username,
        MessageAction: 'SUPPRESS',
        UserPoolId: userPoolId,
        UserAttributes: [
          ...userAtt,
          {
            Name: 'email_verified',
            Value: 'true',
          },
        ],
      })
    );
  };
  return traceableFunction('CreateUser', 'FAULT_COG_RESEND_CONFIRMATION_CODE', username, cmd);
};

export const setUserPassword = async (username: string, userPoolId = process.env.USER_POOL_ID): Promise<AdminEnableUserCommandOutput> => {
  const cmd = () => {
    return cognito.send(
      new AdminSetUserPasswordCommand({
        Username: username,
        Password: `${Math.random().toString(36).slice(-8)}42`,
        Permanent: true,
        UserPoolId: userPoolId,
      })
    );
  };
  return traceableFunction('SetUserPassword', 'FAULT_COG_RESEND_CONFIRMATION_CODE', username, cmd);
};
