import Cognito from 'aws-sdk/clients/cognitoidentityserviceprovider';
import { ApiError } from '../../../handler/api/api-error';

const cognito = new Cognito();

export const signInCognitoUser = async (
  username: string,
  password: string,
  clientId = process.env.USER_POOL_CLIENT_ID
): Promise<Cognito.AuthenticationResultType> => {
  if (!clientId) throw new Error('Missing USER_POOL_CLIENT_ID');
  const response = await cognito
    .initiateAuth({
      ClientId: clientId,
      AuthFlow: 'USER_PASSWORD_AUTH',
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    })
    .promise();

  if (!response.AuthenticationResult) throw new ApiError('InvalidAuth', 500, 'MissingAuthResult');
  return response.AuthenticationResult;
};
