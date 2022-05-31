import Cognito from 'aws-sdk/clients/cognitoidentityserviceprovider';

const cognito = new Cognito();

export const deleteCognitoUser = async (username: string, userPoolId = process.env.USER_POOL_ID): Promise<void> => {
  if (!userPoolId) throw new Error('Missing USER_POOL_ID');
  await cognito
    .adminDeleteUser({
      UserPoolId: userPoolId,
      Username: username,
    })
    .promise();
};
