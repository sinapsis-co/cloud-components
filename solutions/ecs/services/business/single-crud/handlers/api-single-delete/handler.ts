import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { singleRepo } from '../../repository/repo-single';

export const handler = apiHandler<baseApi.delete.Interface>(async (_, req) => {
  const { id } = req.pathParams;
  return await singleRepo.deleteItem({ id });
}, baseApi.delete.config);
