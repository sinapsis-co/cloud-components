// import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';

import { CustomError } from '../../../../../config/error-catalog';

// export const handler = apiHandler<baseApi.delete.Interface>(async (_, req) => {
//   const { tenantId } = req.claims;
//   const { id } = req.pathParams;
//   return await baseRepo.deleteItem({ tenantId, id });
// }, baseApi.delete.config);

export const handler = async () => {
  throw new CustomError({ code: 'ERROR_ITEM_NOT_FOUND' });
};
