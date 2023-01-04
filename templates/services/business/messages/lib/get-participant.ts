import { ConversationsUser } from '../entities';
import { conversationsUserRepo } from '../repository';

export const getParticipant = async (tenantId: string, piiker: string): Promise<ConversationsUser> => {
  const conversation = await conversationsUserRepo.getItem({
    tenantId,
    userId: piiker,
  });

  return conversation;
};
