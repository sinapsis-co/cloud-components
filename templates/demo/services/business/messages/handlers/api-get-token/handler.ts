import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { messagesSecret } from '../../catalog';
import * as api from '../../catalog/api';
import { message } from '../../platform/twilio';

export const handler = apiHandler<api.getToken.Interface>(async (_, req) => {
  const { sub, tenantId } = req.claims;

  const secret = await getSecret<messagesSecret.twilio.Secret>(messagesSecret.twilio.secretConfig);

  return message({ secret }).generateToken(`${tenantId}#${sub}`);
}, api.getToken.config);
