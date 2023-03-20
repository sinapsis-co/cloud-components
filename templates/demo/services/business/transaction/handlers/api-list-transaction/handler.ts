import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { transactionApi } from '../../catalog';
import { transactionRepo } from '../../repository';

export const handler = apiHandler<transactionApi.listTransaction.Interface>(async (_, req) => {
  const { limit, nextToken } = req.queryParams;
  const { sub } = req.claims;

  const data = await transactionRepo.listItem(sub, { limit: Number(limit) || 50, nextToken });
  return {
    ...data,
    items: data.items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
  };
}, transactionApi.listTransaction.config);
