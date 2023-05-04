import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { repoIngredient } from '../../repository/repo-ingredient';

export const handler = apiHandler<baseApi.update.Interface>(async (_, req) => {
  const { id } = req.pathParams;
  return await repoIngredient.updateItem({ id }, req.body);
}, baseApi.update.config);
