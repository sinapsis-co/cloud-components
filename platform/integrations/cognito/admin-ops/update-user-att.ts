import Cognito from 'aws-sdk/clients/cognitoidentityserviceprovider';

const cognito = new Cognito();

export const updateCognitoUser = async (
  username: string,
  attributes: Cognito.AttributeListType,
  userPoolId = process.env.USER_POOL_ID
): Promise<void> => {
  if (!userPoolId) throw new Error('Missing USER_POOL_ID');
  await cognito
    .adminUpdateUserAttributes({
      UserPoolId: userPoolId,
      Username: username,
      UserAttributes: attributes,
    })
    .promise();
};
