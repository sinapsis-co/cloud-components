import { StringAttribute } from 'aws-cdk-lib/aws-cognito';

import { UserCognito } from '../entities/user-cognito';

export const buildCustomAttributes = (): Record<keyof UserCognito['custom'], StringAttribute> => {
  return {
    tenantId: new StringAttribute({ mutable: true }),
    companyName: new StringAttribute({ mutable: true }),
    role: new StringAttribute({ mutable: true }),
  };
};
