import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { repoSingle } from '../../repository/repo-single';

export const handler = apiHandler<baseApi.list.Interface>(async (_, req) => {
  const { limit, nextToken } = req.queryParams;
  return await repoSingle.scanTable({ limit: Number(limit) || 50, nextToken });
}, baseApi.list.config);
