import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { payoutApi } from '../../catalog';
import { payoutRepo } from '../../repository';

export const handler = apiHandler<payoutApi.payout.getPayout.Interface>(async (_, req) => {
  const { sub } = req.claims;

  return await payoutRepo.getItem({ tenantId: sub, id: req.pathParams.id });
}, payoutApi.payout.getPayout.config);
