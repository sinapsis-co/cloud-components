import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { awsApi } from '../../catalog';
import { connectRootAccount } from '../../platform/landing/connect-root-account';

export const handler = apiHandler(async (_, req) => {
  await connectRootAccount(req.body);
  return { processing: true };
}, awsApi.landingCreate.definition);
