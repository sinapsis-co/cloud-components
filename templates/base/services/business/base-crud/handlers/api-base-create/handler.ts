// import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
// import { uuid } from '@sinapsis-co/cc-platform/lib/uuid';
// import { baseApi } from '../../catalog';
// import { baseRepo } from '../../repository/base';

import { generateTracing } from '@sinapsis-co/cc-platform/tracing';

// export const handler = apiHandler<baseApi.create.Interface>(async (_, req) => {
//   const { tenantId } = req.claims;
//   return await baseRepo.createItem({ tenantId, id: uuid() }, req.body);
// }, baseApi.create.config);

export const handler = async () => {
  const tracing = generateTracing();
  // tracing!.addError(new Error('this is a 500 error'));
  tracing!.addFaultFlag();
  tracing.close();
  return {
    statusCode: 500,
    body: JSON.stringify({
      errorType: 'error500',
      errorMessage: 'this an error 500',
    }),
  };
};
