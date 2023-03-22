import { AdminUpdateUserAttributesCommand } from '@aws-sdk/client-cognito-identity-provider';
import { AttributeListType, cognito } from '..';
import { HandledFault } from '../../../util/handled-exception';

export const updateCognitoUser = async (
  username: string,
  attributes: AttributeListType,
  userPoolId = process.env.USER_POOL_ID
): Promise<void> => {
  if (!userPoolId) throw new HandledFault({ code: 'FAULT_COG_INVALID_POOL_ID' });
  await cognito.send(
    new AdminUpdateUserAttributesCommand({
      UserPoolId: userPoolId,
      Username: username,
      UserAttributes: attributes,
    })
  );
};
