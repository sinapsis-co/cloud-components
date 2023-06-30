import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { identityApi } from '../../catalog';
import { repoOrgUser } from '../../repository/repo-org-user';

export const handler = apiHandler(async (_, req) => {
  const { sub } = req.claims;
  const SK = repoOrgUser.keySerialize({ orgId: '', userId: sub }).SK;
  return repoOrgUser.listIndex('GSI_1', SK);
}, identityApi.userListOrg.definition);
