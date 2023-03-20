// import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';

import { generateTracing } from '@sinapsis-co/cc-platform/tracing';

// export const handler = apiHandler<baseApi.delete.Interface>(async (_, req) => {
//   const { tenantId } = req.claims;
//   const { id } = req.pathParams;
//   return await baseRepo.deleteItem({ tenantId, id });
// }, baseApi.delete.config);

export const handler = async () => {
  // const tracing = generateTracing();
  const tracing = generateTracing();
  // tracing!.addError(new Error('this is a 400 error'));
  tracing.addErrorFlag();

  tracing.close();
  return {
    statusCode: 400,
    body: JSON.stringify({
      errorType: 'error400',
      errorMessage: 'this an error 400',
    }),
  };
};
