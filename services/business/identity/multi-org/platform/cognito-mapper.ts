// import { AttributeListType } from '@sinapsis-co/cc-sdk/integration/cognito';
import { AttributeListType } from '@sinapsis-co/cc-sdk/integration/cognito';

import { UserCognito } from '../entities/user-cognito';
import { UserModel } from '../model/user';

export const cognitoToProfileMapper = (userCognito: UserCognito): UserModel['Body'] & UserModel['Key'] => {
  return {
    userId: userCognito.standard.sub,
    email: userCognito.standard.email,
    givenName: userCognito.standard.given_name,
    familyName: userCognito.standard.family_name,
  };
};

export const cognitoUpdateStandardMapper = (userProfile: Partial<UserModel['Entity']>): AttributeListType => {
  const mapper = {
    sub: userProfile.userId,
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