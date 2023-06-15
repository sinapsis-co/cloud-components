/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { assumeRole, AssumeRoleResponse } from '@sinapsis-co/cc-platform-v2/util/assume-role';
import { retrievableFunc, wait } from '@sinapsis-co/cc-platform-v2/util/executers';
import aws, { Organizations } from 'aws-sdk';

import { AccountCreateParams } from '../../catalog/api/account/create';
import { AwsAccount, EnrichedAwsAccount } from '../../entities/aws-account';
import { enrichAccount } from '../../lib/enrich-account';
import { awsAccountRepo } from '../../repository/aws-account';
import { adminRoleName } from '../landing/connect-root-account';
import { createDevRole } from './role/create-dev-role';

const rootAccountId = process.env.ROOT_ACCOUNT_ID!;
const region = 'us-east-1';

export const createAwsAccount = async (params: AccountCreateParams): Promise<AwsAccount & EnrichedAwsAccount> => {
  const { projectName, envName, isClientAccount } = params;
  const email = `${projectName}+${envName}@sinapsis.co`;

  const envs = ['dev', 'staging', 'prod'];
  if (!envs.includes(envName)) throw new ApiError('Invalid envAccess', 400, `envName should be one of these: ${envs}`);

  let rootCredentials: any = null;
  if (isClientAccount) {
    const { account, roleName } = await awsAccountRepo.getItem({ projectName, envName: 'root' }).catch(() => {
      throw new ApiError('MissingRootAccountConnection', 400);
    });
    rootCredentials = (await assumeRole({ roleArn: `arn:aws:iam::${account}:role/${roleName}` })).credentials;
  }

  const accountId = await createAccount(envName, projectName, email, adminRoleName, rootCredentials);

  const { credentials } = await retrievableFunc(0, 0, 500, assumeRole, {
    account: accountId,
    roleName: adminRoleName,
    credentials: rootCredentials,
  });

  const createdAccountIAM = new aws.IAM({ credentials });
  const roleName = await createDevRole(createdAccountIAM, accountId, rootAccountId, envName);

  const res = await awsAccountRepo.createItem({ projectName, envName }, { account: accountId, email, roleName });
  return enrichAccount(res);
};

export const createAccount = async (
  env: string,
  project: string,
  email: string,
  adminRoleName: string,
  credentials?: AssumeRoleResponse['credentials']
): Promise<string> => {
  const organizations = new Organizations({ region, credentials });

  const createAccountResult = await organizations
    .createAccount({ RoleName: adminRoleName, AccountName: `${project}-${env}`, Email: email })
    .promise();

  if (!createAccountResult.CreateAccountStatus?.Id) throw new ApiError('MissingAccountCreationId', 500);

  const creationId: string = createAccountResult.CreateAccountStatus?.Id;

  const accountId: string = await getAccount(organizations, creationId);

  return accountId;
};

export const getAccount = async (organizations: Organizations, CreateAccountRequestId: string): Promise<string> => {
  const account = await organizations.describeCreateAccountStatus({ CreateAccountRequestId }).promise();
  if (account.CreateAccountStatus?.State === 'IN_PROGRESS') {
    await wait(1000);
    return await getAccount(organizations, CreateAccountRequestId);
  }
  if (account.CreateAccountStatus?.State === 'FAILED')
    throw new Error(`Error creating account: ${account.CreateAccountStatus.FailureReason}`);
  if (!account.CreateAccountStatus?.AccountId) throw new Error('Missing account.CreateAccountStatus?.AccountId');
  return account.CreateAccountStatus?.AccountId;
};
