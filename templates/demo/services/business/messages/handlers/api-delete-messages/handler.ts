import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { messagesSecret } from '../../catalog';
import * as api from '../../catalog/api';
import { message } from '../../platform/twilio';
import { conversationsUserRepo } from '../../repository';

export const handler = apiHandler<api.deleteMessage.Interface>(async (_, req) => {
  const { tenantId, sub } = req.claims;
  const { userId } = req.body;
  const tenantOwner = `${tenantId}#${sub}`;

  const [userOwner, userAssociated, twilioSecret] = await Promise.all([
    conversationsUserRepo.getItem({ tenantId: tenantOwner, userId }),
    conversationsUserRepo.getItem({ tenantId: userId, userId: tenantOwner }),
    getSecret<messagesSecret.twilio.Secret>(messagesSecret.twilio.secretConfig),
  ]);

  const { deleteMessage } = message({ secret: twilioSecret });

  await Promise.all([
    conversationsUserRepo.deleteItem({ tenantId: tenantOwner, userId }),
    conversationsUserRepo.deleteItem({ tenantId: userAssociated.tenantId, userId: tenantOwner }),
  ]);

  await deleteMessage({
    conversationId: userOwner.conversationId,
  });

  return {};
}, api.deleteMessage.config);
