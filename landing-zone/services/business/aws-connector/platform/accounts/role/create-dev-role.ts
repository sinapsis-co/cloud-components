import IAM from 'aws-sdk/clients/iam';
import { getDevPolicy } from '../policy/dev-policy';
import { getRolePolicy } from '../policy/role-policy';

export const envMapper: Record<string, string> = {
  dev: '',
  test: '',
  staging: 'Staging',
  prod: 'Prod',
};

export const createDevRole = async (
  iam: IAM,
  accountId: string,
  rootAccountId: string,
  env: string
): Promise<string> => {
  if (envMapper[env] === undefined) throw new Error('Bad env');

  const sinapsisDevRole = await iam
    .createRole(getRolePolicy(`SinapsisDevRole${envMapper[env]}`, rootAccountId))
    .promise();

  const sinapsisDevPolicy = await iam
    .createPolicy(getDevPolicy(`SinapsisDevPolicy${envMapper[env]}`, accountId))
    .promise();

  await iam
    .attachRolePolicy({
      PolicyArn: sinapsisDevPolicy.Policy!.Arn!,
      RoleName: sinapsisDevRole.Role.RoleName,
    })
    .promise();

  return `SinapsisDevRole${envMapper[env]}`;
};
