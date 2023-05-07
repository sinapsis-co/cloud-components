import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { ingredientApi } from '../../catalog';
import { repoIngredient } from '../../repository/repo-ingredient';

export const handler = apiHandler(async (_, req) => {
  const { id } = req.pathParams;
  return await repoIngredient.deleteItem({ id });
}, ingredientApi.delete.definition);
