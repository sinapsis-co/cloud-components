import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { identityApi } from 'services/business/identity/catalog';
import { inviteRepository } from '../../repository/repo-invite';

export const handler = apiHandler<identityApi.inviteDelete.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  return inviteRepository.deleteItem({ tenantId, id });
}, identityApi.inviteDelete.config);
