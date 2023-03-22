import { InitiateAuthCommand, InitiateAuthCommandOutput } from '@aws-sdk/client-cognito-identity-provider';
import { cognito } from '..';
import { HandledFault } from '../../../util/handled-exception';

export const signInCognitoUser = async (
  username: string,
  password: string,
  clientId = process.env.USER_POOL_CLIENT_ID
): Promise<InitiateAuthCommandOutput['AuthenticationResult']> => {
  if (!clientId) throw new HandledFault({ code: 'FAULT_COG_INVALID_CLIENT_POOL' });
  const response = await cognito.send(
    new InitiateAuthCommand({
      ClientId: clientId,
      AuthFlow: 'USER_PASSWORD_AUTH',
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    })
  );

  if (!response.AuthenticationResult) throw new HandledFault({ code: 'FAULT_COG_INVALID_SIGN_IN' });
  return response.AuthenticationResult;
};
