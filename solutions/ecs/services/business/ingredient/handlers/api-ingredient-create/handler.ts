import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { uuid } from '@sinapsis-co/cc-sdk/lib/uuid';
import { baseApi } from '../../catalog';
import { repoIngredient } from '../../repository/repo-ingredient';

export const handler = apiHandler<baseApi.create.Interface>(async (_, req) => {
  return await repoIngredient.createItem({ id: uuid() }, req.body);
}, baseApi.create.config);
