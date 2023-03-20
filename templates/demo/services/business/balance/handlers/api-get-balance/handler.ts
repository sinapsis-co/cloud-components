import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { balanceApi } from '../../catalog';
import { balanceRepo } from '../../repository';

export const handler = apiHandler<balanceApi.getBalance.Interface>(async (_, req) => {
  const { tenantId, sub } = req.claims;
  return await balanceRepo
    .getItem({ tenantId, userId: sub })
    .catch(() => ({ pending: 0, available: 0, inTransitToBank: 0, updatedAt: new Date(), userId: sub }));
}, balanceApi.getBalance.config);
