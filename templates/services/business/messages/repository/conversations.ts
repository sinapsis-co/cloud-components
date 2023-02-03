import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import {
  Conversations,
  ConversationsBuilder,
  ConversationsCreate,
  ConversationsStore,
} from '../entities/conversations';

export const conversationsRepo = repository<ConversationsBuilder>({
  tableName: process.env.MESSAGES_TABLE || process.env.TABLE!,
  repoName: 'conversations',
  keySerialize: (key: ConversationsBuilder['key']): ConversationsBuilder['storeMapping']['key'] => {
    return {
      pk: 'CONVERSATIONS',
      sk: key.id,
    };
  },
  entitySerialize: (key: ConversationsBuilder['key'], entityCreate: ConversationsCreate): ConversationsStore => {
    const mappedKey: ConversationsBuilder['storeMapping']['key'] = {
      pk: 'CONVERSATIONS',
      sk: key.id,
    };
    const timers: ConversationsBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return {
      ...mappedKey,
      ...entityCreate,
      ...timers,
    };
  },
  entityDeserialize: (entityStore: ConversationsStore): Conversations => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      id: sk,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type ConversationsRepoEvent = RepositoryEvent<ConversationsBuilder>;
