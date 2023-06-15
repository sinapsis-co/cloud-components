import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { awsApi } from '../../catalog';
import { createAwsAccount } from '../../platform/accounts/create-account';

export const handler = apiHandler<awsApi.accountCreate.Interface>(async (_, req) => {
  return await createAwsAccount(req.body);
}, awsApi.accountCreate.config);
