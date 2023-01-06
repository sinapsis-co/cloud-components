import { ConversationsUser } from '../entities';
import { conversationsUserRepo } from '../repository';

export const getParticipant = async (tenantId: string, userId: string): Promise<ConversationsUser> => {
  const conversation = await conversationsUserRepo.getItem({
    tenantId,
    userId,
  });

  return conversation;
};
