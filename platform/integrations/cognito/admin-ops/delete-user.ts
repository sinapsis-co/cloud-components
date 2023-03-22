import { AdminDeleteUserCommand } from '@aws-sdk/client-cognito-identity-provider';
import { cognito } from '..';
import { HandledFault } from '../../../util/handled-exception';

export const deleteCognitoUser = async (username: string, userPoolId = process.env.USER_POOL_ID): Promise<void> => {
  if (!userPoolId) throw new HandledFault({ code: 'FAULT_COG_INVALID_POOL_ID' });
  await cognito.send(
    new AdminDeleteUserCommand({
      UserPoolId: userPoolId,
      Username: username,
    })
  );
};
