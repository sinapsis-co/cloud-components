import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { uuid } from '@sinapsis-co/cc-sdk/lib/uuid';

import { ingredientApi } from '../../catalog';
import { repoIngredient } from '../../repository/repo-ingredient';

export const handler = apiHandler(async (_, req) => {
  return await repoIngredient.createItem({ id: uuid() }, req.body);
}, ingredientApi.create.definition);
