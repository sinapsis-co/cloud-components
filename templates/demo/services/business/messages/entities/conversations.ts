import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform/repository/interface';
import { ConversationState } from 'twilio/lib/rest/conversations/v1/conversation';

export type ConversationsBuilder = EntityBuilder<{
  name: 'conversations';
  body: {
    users?: string[];
    status: ConversationState;
  };
  key: {
    id: string;
  };
  timers: {
    createdAt: Date;
    updatedAt: Date;
  };
  storeMapping: {
    key: {
      pk: 'CONVERSATIONS';
      sk: string;
    };
    timers: {
      createdAt: string;
      updatedAt: string;
    };
  };
}>;
export type Conversations = Entity<ConversationsBuilder>;
export type ConversationsStore = EntityStore<ConversationsBuilder>;
export type ConversationsCreate = EntityCreate<ConversationsBuilder>;
