import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { paymentClaimApi } from '../../catalog';
import { paymentClaimRepo } from '../../repository/paymentClaim';

export const handler = apiHandler<paymentClaimApi.list.Interface>(async (_, req) => {
  const { sub } = req.claims;
  const { limit, nextToken } = req.queryParams;
  return await paymentClaimRepo.listItem(sub, { limit: Number(limit) || 50, nextToken });
}, paymentClaimApi.list.config);
