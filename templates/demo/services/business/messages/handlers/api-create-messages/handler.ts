import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { uuid } from '@sinapsis-co/cc-platform/lib/uuid';
import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';
import { errorApi } from 'services/support/utils/api-error';
import { messagesSecret } from '../../catalog';
import * as api from '../../catalog/api';
import { message } from '../../platform/twilio';
import { conversationsRepo, conversationsUserRepo } from '../../repository';
import { ERROR_OWN_SERVICE } from '../../utils/errors';

export const handler = apiHandler<api.createMessage.Interface>(
  async (_, req) => {
    const { sub, tenantId} = req.claims;

    const targetUserId = req.body.userId;
    const userId = `${tenantId}#${sub}`;

    if (sub === targetUserId) {
      throw errorApi(ERROR_OWN_SERVICE);
    }

    const twilioSecret = await getSecret<messagesSecret.twilio.Secret>(messagesSecret.twilio.secretConfig);

    const { createConversations, addParticipant, sendMessage } = message({ secret: twilioSecret });

    const currentConversation = await conversationsUserRepo.checkItemExists({ tenantId: sub, userId: targetUserId });

    if (currentConversation.exists && currentConversation.entity) {
      if (req.body.message) {
        await sendMessage({
          conversationId: currentConversation.entity.conversationId,
          message: req.body.message,
          participantSid: sub,
          attributes: {
            contentType: 'text',
          },
        });
      }
      return currentConversation.entity!;
    }
    const users = [userId, targetUserId];

    const [profileOwner, profileTarget] = await Promise.all(
      users.map(async (user) => userProfileRepository.getItem({ tenantId: user.split('#')[0], id: user.split('#')[0]}))
    );

    const { sid, state } = await createConversations(uuid());

    const [participantOwner, participantTarget] = await Promise.all([
      addParticipant(sid, profileOwner.id, profileOwner),
      addParticipant(sid, profileTarget.id, profileTarget),
    ]);

    const [conversationOwner] = await Promise.all([
      conversationsUserRepo.batchCreateItem([
        {
          key: { tenantId: `${tenantId}#${sub}`, userId: targetUserId },
          entityCreate: { status: state, conversationId: sid, participantSid: participantOwner.sid },
        },
        {
          key: { tenantId: targetUserId, userId: `${tenantId}#${sub}` },
          entityCreate: { status: state, conversationId: sid, participantSid: participantTarget.sid },
        },
      ]),
      conversationsRepo.createItem(
        { id: sid },
        {
          users,
          status: state,
        }
      ),
    ]);

    if (req.body.message) {
      await sendMessage({
        conversationId: sid,
        message: req.body.message,
        participantSid: sub,
        attributes: {
          contentType: 'text',
        },
      });
    }

    return conversationOwner[0];
  },
  api.createMessage.config,
  undefined,
  201
);
