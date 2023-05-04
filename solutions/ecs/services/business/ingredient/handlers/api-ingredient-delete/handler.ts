import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { repoIngredient } from '../../repository/repo-ingredient';

export const handler = apiHandler<baseApi.delete.Interface>(async (_, req) => {
  const { id } = req.pathParams;
  return await repoIngredient.deleteItem({ id });
}, baseApi.delete.config);
