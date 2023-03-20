import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { recoverySubscriptionReportApi } from '../../catalog';
import { recoverySubscriptionReportRepo } from '../../repository/recoverySubscriptionReport';

export const handler = apiHandler<recoverySubscriptionReportApi.list.Interface>(async (_, req) => {
  const { sub } = req.claims;
  const { limit, nextToken } = req.queryParams;

  return await recoverySubscriptionReportRepo.listItem(`${sub}`, { limit: Number(limit) || 50, nextToken });
}, recoverySubscriptionReportApi.list.config);
