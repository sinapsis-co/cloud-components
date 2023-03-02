import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { ConversationState } from 'twilio/lib/rest/conversations/v1/conversation';

export type ConversationsUserBuilder = EntityBuilder<{
  name: 'conversations-user';
  body: {
    conversationId: string;
    participantSid: string;
    status: ConversationState;
  };
  key: {
    tenantId: string;
    userId: string;
  };
  timers: {
    createdAt: Date;
    updatedAt: Date;
  };
  storeMapping: {
    key: {
      sk: string;
      pk: string;
    };
    timers: {
      createdAt: string;
      updatedAt: string;
    };
  };
}>;
export type ConversationsUser = Entity<ConversationsUserBuilder>;
export type ConversationsUserStore = EntityStore<ConversationsUserBuilder>;
export type ConversationsUserCreate = EntityCreate<ConversationsUserBuilder>;
