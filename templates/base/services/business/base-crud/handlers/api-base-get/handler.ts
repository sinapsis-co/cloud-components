// import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
// import { baseApi } from '../../catalog';
// import { baseRepo } from '../../repository/base';

// export const handler = apiHandler<baseApi.get.Interface>(async (_, req) => {
//   const { tenantId } = req.claims;
//   return await baseRepo.getItem({ tenantId, id: req.pathParams.id });
// }, baseApi.get.config);

export const handler = async () => {
  throw new Error('this is a 500 error');
  return {
    statusCode: 200,
    body: JSON.stringify({ detail: 'this an OK 200' }),
  };
};
