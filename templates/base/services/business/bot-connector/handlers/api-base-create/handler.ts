// import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';

import { CustomFault } from '../../../../../config/error-catalog';

// export const handler = apiHandler<baseApi.create.Interface>(async (_, req) => {
//   const { tenantId } = req.claims;
//   return await baseRepo.createItem({ tenantId, id: uuid() }, req.body);
// }, baseApi.create.config);

export const handler = async () => {
  const meta = { tenantId: '1234', userId: 'AA' };
  // const tracing = generateTracing();
  // tracing!.addError(new Error('this is a 500 error'));
  // tracing!.addFaultFlag();
  // tracing.close();
  throw new CustomFault({ code: 'FAULT_COG_INVALID_CLIENT_POOL', meta });
};
