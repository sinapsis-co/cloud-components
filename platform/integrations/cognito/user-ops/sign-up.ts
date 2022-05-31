import Cognito from 'aws-sdk/clients/cognitoidentityserviceprovider';
import { ApiError } from '../../../handler/api/api-error';

type CognitoUser = {
  sub: string;
  tenantId: string;
  email: string;
  givenName: string;
  familyName: string;
  companyName: string;
  role?: string;
  permission?: string;
};

const cognito = new Cognito();

export const signUpCognitoUser = async (
  user: Omit<CognitoUser, 'sub'>,
  password: string,
  clientId = process.env.USER_POOL_CLIENT_ID
): Promise<CognitoUser> => {
  if (!clientId) throw new ApiError('AUTH.USER_POOL_CLIENT_ID');
  if (!user.tenantId) throw new ApiError('AUTH.MISSING_TENANT_ID', 400);

  if (!user.role) user.role = 'owner';
  if (!user.permission || user.role === 'owner') user.permission = 'ADMIN';

  const response = await cognito
    .signUp({
      ClientId: clientId,
      Username: user.email,
      Password: password,
      UserAttributes: [
        { Name: 'email', Value: user.email },
        { Name: 'given_name', Value: user.givenName },
        { Name: 'family_name', Value: user.familyName },
        { Name: 'custom:tenantId', Value: user.tenantId },
        { Name: 'custom:companyName', Value: user.companyName },
        { Name: 'custom:role', Value: user.role },
        { Name: 'custom:permission', Value: user.permission },
      ],
    })
    .promise();

  return {
    sub: response.UserSub,
    ...user,
  };
};
