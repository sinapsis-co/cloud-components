import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { messagesSecret } from '../../catalog';
import * as api from '../../catalog/api';
import { message } from '../../platform/twilio';
import { conversationsUserRepo } from '../../repository';

export const handler = apiHandler<api.deleteMessage.Interface>(async (_, req) => {
  const { sub } = req.claims;
  const { userId } = req.body;

  const [userOwner, userAssociated, twilioSecret] = await Promise.all([
    conversationsUserRepo.getItem({ tenantId: sub, userId }),
    conversationsUserRepo.getItem({ tenantId: userId, userId: sub }),
    getSecret<messagesSecret.twilio.Secret>(messagesSecret.twilio.secretConfig),
  ]);

  const { deleteMessage } = message({ secret: twilioSecret });

  await Promise.all([
    conversationsUserRepo.deleteItem({ tenantId: sub, userId }),
    conversationsUserRepo.deleteItem({ tenantId: userAssociated.tenantId, userId: sub }),
  ]);

  await deleteMessage({
    conversationId: userOwner.conversationId,
  });

  return {};
}, api.deleteMessage.config);
