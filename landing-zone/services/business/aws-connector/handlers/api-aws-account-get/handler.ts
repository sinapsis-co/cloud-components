import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { awsApi } from '../../catalog';
import { enrichAccount } from '../../lib/enrich-account';
import { awsAccountRepo } from '../../repository/aws-account';

export const handler = apiHandler<awsApi.accountGet.Interface>(async (_, req) => {
  const { projectName, envName } = req.pathParams;
  const res = await awsAccountRepo.getItem({ projectName, envName });
  return enrichAccount(res);
}, awsApi.accountGet.config);
