import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import * as api from '../../catalog/api';
import { subscriptionRepository } from '../../repository';

export const handler = apiHandler<api.getSubscription.Interface>(async (_, request) => {
  const { tenantId, sub } = request.claims;

  const subscription = await subscriptionRepository.getItem({
    tenantId,
    userId: sub,
    subscriptionId: request.pathParams.subscriptionId,
  });

  return subscription;
}, api.getSubscription.config);
