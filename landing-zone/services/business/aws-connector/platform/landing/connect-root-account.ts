import aws from 'aws-sdk';

import { retrievableFunc } from '@sinapsis-co/cc-sdk/util/executers';
import { AccountConnectParams } from '../../catalog/api/landing/create';
import { awsAccountRepo } from '../../repository/aws-account';
import { createAdminRole } from '../accounts/role/create-admin-role';
import { deleteAwsUser } from '../users/delete-aws-user';

export const adminRoleName = 'SinapsisAdminRole';
const rootAccountId = process.env.ROOT_ACCOUNT_ID!;

export const connectRootAccount = async (params: AccountConnectParams): Promise<void> => {
  const { credentials, projectName } = params;

  // Client Credentials Ops (Not IAM policies required)
  const stsRootAccountIAM = new aws.STS({ credentials });
  const clientRootAccountIAM = new aws.IAM({ credentials: params.credentials });
  const orgRootAccountIAM = new aws.Organizations({ credentials });

  const { Account } = await stsRootAccountIAM.getCallerIdentity().promise();
  const { User } = await clientRootAccountIAM.getUser().promise();

  await orgRootAccountIAM
    .createOrganization()
    .promise()
    .catch((e) => {
      if (e.code === 'AlreadyInOrganizationException') return;
      throw e;
    });

  await createAdminRole(clientRootAccountIAM, rootAccountId, adminRoleName);

  // Manager Root Account Ops (IAM policies required)
  await awsAccountRepo.createItem(
    { projectName, envName: 'root' },
    { email: `${projectName}+root@sinapsis.co`, account: Account!, roleName: adminRoleName }
  );

  const { credentials: roleCred } = await retrievableFunc(0, 0, 500, assumeRole, {
    account: Account,
    roleName: adminRoleName,
  });

  // Role Assumed Role Ops
  const assumedRoleAccountIAM = new aws.IAM({ credentials: roleCred });

  await deleteAwsUser(assumedRoleAccountIAM, User.UserName, credentials.accessKeyId);
};
