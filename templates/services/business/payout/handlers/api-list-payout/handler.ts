import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { payout } from '../../catalog/api';
import { payoutRepo } from '../../repository/payout';

export const handler = apiHandler<payout.listPayout.Interface>(async (_, req) => {
  const { sub } = req.claims;
  const { limit, nextToken } = req.queryParams;

  const data = await payoutRepo.listItem(sub, { limit: Number(limit || 50), nextToken });

  return {
    ...data,
    items: data.items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
  };
}, payout.listPayout.config);
