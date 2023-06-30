import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { landingApi } from '../../catalog';
import { repoLanding } from '../../repository/repo-landing';

export const handler = apiHandler(async (_, req) => {
  const { id } = req.pathParams;
  return await repoLanding.deleteItem({ id });
}, landingApi.delete.definition);
