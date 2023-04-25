import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { singleRepo } from '../../repository/repo-single';

export const handler = apiHandler<baseApi.get.Interface>(async (_, req) => {
  return await singleRepo.getItem({ id: req.pathParams.id });
}, baseApi.get.config);
