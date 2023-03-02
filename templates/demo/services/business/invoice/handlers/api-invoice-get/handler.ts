import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { invoiceApi } from '../../catalog';
import { invoiceRepository } from '../../repository/invoice';
export const handler = apiHandler<invoiceApi.get.Interface>(async (_, req) => {
  const { tenantId, sub } = req.claims;
  return await invoiceRepository.getItem({ tenantId, id: req.pathParams.id, userId: sub });
}, invoiceApi.get.config);
