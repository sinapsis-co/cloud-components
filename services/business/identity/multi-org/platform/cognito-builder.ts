import { StringAttribute } from 'aws-cdk-lib/aws-cognito';

import { UserCognito } from '../entities/user-cognito';

export const buildCustomAttributes = (): Record<keyof UserCognito['custom'], StringAttribute> => {
  return {
    orgName: new StringAttribute({ mutable: true }),
  };
};
