import {
  AdminDeleteUserCommand,
  AdminDeleteUserCommandOutput,
  AdminDisableUserCommand,
  AdminDisableUserCommandOutput,
  AdminEnableUserCommand,
  AdminEnableUserCommandOutput,
  AdminUpdateUserAttributesCommand,
  AdminUpdateUserAttributesCommandInput,
  AdminUpdateUserAttributesCommandOutput,
  CognitoIdentityProviderClient,
} from '@aws-sdk/client-cognito-identity-provider';

import { Tracing, traceableFunction } from 'tracing';

export const cognito: CognitoIdentityProviderClient = Tracing.captureIntegration(
  new CognitoIdentityProviderClient({}) as any
);

export type AttributeListType = AdminUpdateUserAttributesCommandInput['UserAttributes'];

export const deleteCognitoUser = async (
  username: string,
  userPoolId = process.env.USER_POOL_ID
): Promise<AdminDeleteUserCommandOutput> => {
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

export const disableCognitoUser = async (
  username: string,
  userPoolId = process.env.USER_POOL_ID
): Promise<AdminDisableUserCommandOutput> => {
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
export const enableCognitoUser = async (
  username: string,
  userPoolId = process.env.USER_POOL_ID
): Promise<AdminEnableUserCommandOutput> => {
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
