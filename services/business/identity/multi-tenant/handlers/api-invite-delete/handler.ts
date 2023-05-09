import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { identityApi } from '../../catalog';
import { repoInvite } from '../../repository/repo-invite';

export const handler = apiHandler(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  return repoInvite.deleteItem({ tenantId, id });
}, identityApi.inviteDelete.definition);
