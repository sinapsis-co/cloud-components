import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { ingredientApi } from '../../catalog';
import { repoIngredient } from '../../repository/repo-ingredient';

export const handler = apiHandler(async (_, req) => {
  const { limit, nextToken } = req.queryParams;
  return await repoIngredient.listItem(null, { limit: Number(limit) || 50, nextToken });
}, ingredientApi.list.definition);
