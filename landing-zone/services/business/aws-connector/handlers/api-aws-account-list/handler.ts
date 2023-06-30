import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { awsApi } from '../../catalog';
import { enrichAccount, normalizeColors } from '../../lib/enrich-account';
import { awsAccountRepo } from '../../repository/aws-account';

export const handler = apiHandler<awsApi.accountList.Interface>(async (_, req) => {
  const { limit, nextToken } = req.queryParams;
  const { nextToken: nextTokenResponse, items } = await awsAccountRepo.scanTable({
    limit: Number(limit) || 50,
    nextToken,
  });
  return { nextToken: nextTokenResponse, items: normalizeColors(items.map(enrichAccount)) };
}, awsApi.accountList.config);
