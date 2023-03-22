import { SignUpCommand } from '@aws-sdk/client-cognito-identity-provider';
import { cognito } from '..';
import { HandledFault } from '../../../util/handled-exception';

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

export const signUpCognitoUser = async (
  user: Omit<CognitoUser, 'sub'>,
  password: string,
  clientId = process.env.USER_POOL_CLIENT_ID
): Promise<CognitoUser> => {
  if (!clientId) throw new HandledFault({ code: 'FAULT_COG_INVALID_CLIENT_POOL' });

  if (!user.role) user.role = 'owner';
  if (!user.permission || user.role === 'owner') user.permission = 'ADMIN';

  const response = await cognito.send(
    new SignUpCommand({
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
  );

  if (!response.UserSub) throw new HandledFault({ code: 'FAULT_COG_INVALID_SIGN_UP' });

  return {
    sub: response.UserSub,
    ...user,
  };
};
