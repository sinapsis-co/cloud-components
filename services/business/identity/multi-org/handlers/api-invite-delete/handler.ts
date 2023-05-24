import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { identityApi } from '../../catalog';
import { repoEmail } from '../../repository/repo-email';
import { repoInvite } from '../../repository/repo-invite';

export const handler = apiHandler(async (_, req) => {
  const { tenantId } = req.claims;
  const { inviteId } = req.pathParams;
  const user = await repoInvite.deleteItem({ tenantId, inviteId });
  await repoEmail.deleteItem({ email: user.email });
  return user;
}, identityApi.inviteDelete.definition);
