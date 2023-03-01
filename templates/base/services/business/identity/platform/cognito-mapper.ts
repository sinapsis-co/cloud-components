import { StringAttribute } from 'aws-cdk-lib/aws-cognito';
import { AttributeListType } from 'aws-sdk/clients/cognitoidentityserviceprovider';
import { UserCognito } from '../entities/user-cognito';
import { UserProfile } from '../entities/user-profile';

export const buildCustomAttributes = (): Record<keyof UserCognito['custom'], StringAttribute> => {
  return {
    tenantId: new StringAttribute({ mutable: true }),
    companyName: new StringAttribute({ mutable: true }),
    role: new StringAttribute({ mutable: true }),
  };
};

export const cognitoToProfileMapper = (userCognito: UserCognito): UserProfile => {
  return {
    tenantId: userCognito.custom.tenantId,
    companyName: userCognito.custom.companyName,
    id: userCognito.standard.sub,
    email: userCognito.standard.email,
    givenName: userCognito.standard.given_name,
    familyName: userCognito.standard.family_name,
    role: userCognito.custom.role,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export const cognitoUpdateStandardMapper = (userProfile: Partial<UserProfile>): AttributeListType => {
  const mapper = {
    sub: userProfile.id,
    given_name: userProfile.givenName,
    family_name: userProfile.familyName,
    email: userProfile.email,
  };
  return Object.keys(mapper)
    .filter((k) => mapper[k])
    .map((k) => ({ Name: k, Value: mapper[k] }));
};

export const cognitoUpdateCustomMapper = (customAtt: Partial<UserCognito['custom']>): AttributeListType => {
  return Object.keys(customAtt).map((k) => ({ Name: `custom:${k}`, Value: customAtt[k] }));
};
