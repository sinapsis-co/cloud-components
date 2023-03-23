import {
  AdminDeleteUserCommand,
  AdminUpdateUserAttributesCommand,
  AdminUpdateUserAttributesCommandInput,
  CognitoIdentityProviderClient,
} from '@aws-sdk/client-cognito-identity-provider';

import { PlatformFault } from '@sinapsis-co/cc-platform/error';
import { Tracing } from '../../tracing';

export const cognito: CognitoIdentityProviderClient = Tracing.captureIntegration(
  new CognitoIdentityProviderClient({}) as any
);

export type AttributeListType = AdminUpdateUserAttributesCommandInput['UserAttributes'];

export const deleteCognitoUser = async (username: string, userPoolId = process.env.USER_POOL_ID): Promise<void> => {
  if (!userPoolId) throw new PlatformFault({ code: 'FAULT_COG_INVALID_POOL_ID' });
  await cognito.send(
    new AdminDeleteUserCommand({
      UserPoolId: userPoolId,
      Username: username,
    })
  );
};

export const updateCognitoUser = async (
  username: string,
  attributes: AttributeListType,
  userPoolId = process.env.USER_POOL_ID
): Promise<void> => {
  if (!userPoolId) throw new PlatformFault({ code: 'FAULT_COG_INVALID_POOL_ID' });
  await cognito.send(
    new AdminUpdateUserAttributesCommand({
      UserPoolId: userPoolId,
      Username: username,
      UserAttributes: attributes,
    })
  );
};
