// import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';

// export const handler = apiHandler<baseApi.list.Interface>(async (_, req) => {
//   const { tenantId } = req.claims;
//   const { limit, nextToken } = req.queryParams;
//   return await baseRepo.listItem(tenantId, { limit: Number(limit) || 50, nextToken });
// }, baseApi.list.config);

export const handler = async () => {
  // const tracing = generateTracing();
  const error = new Error('this is a 500 error');
  // tracing.addError(error);
  // tracing.close();
  throw error;
  return {
    statusCode: 200,
    body: JSON.stringify({ detail: 'this an OK 200' }),
  };
};
