import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { balanceApi } from '../../catalog';
import { balanceRepo } from '../../repository';

export const handler = apiHandler<balanceApi.getBalance.Interface>(async (_, req) => {
  const { sub } = req.claims;
  return await balanceRepo
    .getItem({ tenantId: sub })
    .catch(() => ({ pending: 0, available: 0, inTransitToBank: 0, updatedAt: new Date() }));
}, balanceApi.getBalance.config);
