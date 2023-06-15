import IAM from 'aws-sdk/clients/iam';
import { getRolePolicy } from '../policy/role-policy';

export const createAdminRole = async (iam: IAM, rootAccountId: string, roleName: string): Promise<void> => {
  const sinapsisAdminRole = await iam
    .createRole(getRolePolicy(roleName, rootAccountId))
    .promise()
    .catch((e) => {
      if (e.code === 'EntityAlreadyExists') return;
      throw e;
    });

  if (!sinapsisAdminRole) return;

  const attachAdminRolePolicyParams = {
    PolicyArn: 'arn:aws:iam::aws:policy/AdministratorAccess',
    RoleName: sinapsisAdminRole.Role.RoleName,
  };
  await iam.attachRolePolicy(attachAdminRolePolicyParams).promise();
};
