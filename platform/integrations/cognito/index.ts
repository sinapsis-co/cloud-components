import {
  AdminDeleteUserCommand,
  AdminDeleteUserCommandOutput,
  AdminUpdateUserAttributesCommand,
  AdminUpdateUserAttributesCommandInput,
  AdminUpdateUserAttributesCommandOutput,
  CognitoIdentityProviderClient,
} from '@aws-sdk/client-cognito-identity-provider';

import { Tracing } from '../../tracing';

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
  return Tracing.traceableOp('DeleteCognitoUser', 'FAULT_COG_DELETE_USER', username, cmd);
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
  return Tracing.traceableOp('UpdateCognitoUser', 'FAULT_COG_UPDATE_USER', username, cmd);
};
