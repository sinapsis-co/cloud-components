import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { repoSingle } from '../../repository/repo-single';

export const handler = apiHandler<baseApi.update.Interface>(async (_, req) => {
  const { id } = req.pathParams;
  return await repoSingle.updateItem({ id }, req.body);
}, baseApi.update.config);
