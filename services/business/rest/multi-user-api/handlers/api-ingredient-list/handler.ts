import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { ingredientApi } from '../../catalog';
import { repoIngredient } from '../../repository/repo-ingredient';

export const handler = apiHandler(async (_, req) => {
  //Using null as PK I'm forcing the scan
  return await repoIngredient.listItem(null, req.queryParams);
}, ingredientApi.list.definition);
