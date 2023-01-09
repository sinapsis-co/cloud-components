import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { payoutSettingUserApi } from '../../catalog';
import { payoutUserRepo } from '../../repository';

export const handler = apiHandler<payoutSettingUserApi.listSettingPayoutUser.Interface>(async (_, req) => {
  const { sub } = req.claims;
  const { limit, nextToken } = req.queryParams;

  return await payoutUserRepo.listItem(sub, { limit: Number(limit || 50), nextToken });
}, payoutSettingUserApi.listSettingPayoutUser.config);
