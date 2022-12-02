import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { categoryApi } from '../../catalog';
import { categoryRepo } from '../../repository/category-repository';

export const handler = apiHandler<categoryApi.delete.Interface>(async (_, req) => {
  const tenantId = req.claims.tenantId;
  //TODO: validate if category already was deleted
  return await categoryRepo.logicalDeleteItem({ tenantId, id: req.pathParams.id });
}, categoryApi.delete.config);
