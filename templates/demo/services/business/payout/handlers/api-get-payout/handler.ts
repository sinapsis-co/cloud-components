import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { payoutApi } from '../../catalog';
import { payoutRepo } from '../../repository';

export const handler = apiHandler<payoutApi.payout.getPayout.Interface>(async (_, req) => {
  const { tenantId, sub } = req.claims;

  return await payoutRepo.getItem({ tenantId, userId: sub, id: req.pathParams.id });
}, payoutApi.payout.getPayout.config);
