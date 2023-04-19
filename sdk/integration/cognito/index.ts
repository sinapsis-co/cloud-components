import * as clientCognitoIdentityProvider from '@aws-sdk/client-cognito-identity-provider';

import { Tracing } from 'tracing';

export const cognito: clientCognitoIdentityProvider.CognitoIdentityProviderClient = Tracing.captureIntegration(
  new clientCognitoIdentityProvider.CognitoIdentityProviderClient({}) as any
);

export type AttributeListType = clientCognitoIdentityProvider.AdminUpdateUserAttributesCommandInput['UserAttributes'];

export const deleteCognitoUser = async (
  username: string,
  userPoolId = process.env.USER_POOL_ID
): Promise<clientCognitoIdentityProvider.AdminDeleteUserCommandOutput> => {
  const cmd = () => {
    return cognito.send(
      new clientCognitoIdentityProvider.AdminDeleteUserCommand({ UserPoolId: userPoolId, Username: username })
    );
  };
  return Tracing.capture('DeleteCognitoUser', 'FAULT_COG_DELETE_USER', username, cmd);
};

export const updateCognitoUser = async (
  username: string,
  attributes: AttributeListType,
  userPoolId = process.env.USER_POOL_ID
): Promise<clientCognitoIdentityProvider.AdminUpdateUserAttributesCommandOutput> => {
  const cmd = () => {
    return cognito.send(
      new clientCognitoIdentityProvider.AdminUpdateUserAttributesCommand({
        UserPoolId: userPoolId,
        Username: username,
        UserAttributes: attributes,
      })
    );
  };
  return Tracing.capture('UpdateCognitoUser', 'FAULT_COG_UPDATE_USER', username, cmd);
};
