// import { AttributeListType } from '@sinapsis-co/cc-platform/integrations/cognito';
import { AttributeListType } from '@sinapsis-co/cc-platform/integrations/cognito';

import { User } from '../entities/user';
import { UserCognito } from '../entities/user-cognito';

export const cognitoToProfileMapper = (userCognito: UserCognito): User => {
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

export const cognitoUpdateStandardMapper = (userProfile: Partial<User>): AttributeListType => {
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
