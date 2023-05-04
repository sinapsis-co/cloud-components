import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { repoIngredient } from '../../repository/repo-ingredient';

export const handler = apiHandler<baseApi.get.Interface>(async (_, req) => {
  const { id } = req.pathParams;
  return await repoIngredient.getItem({ id });
}, baseApi.get.config);
