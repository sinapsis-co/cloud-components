import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import {
  ConversationsUser,
  ConversationsUserBuilder,
  ConversationsUserCreate,
  ConversationsUserStore,
} from '../entities';

export const conversationsUserRepo = repository<ConversationsUserBuilder>({
  tableName: process.env.MESSAGES_TABLE || process.env.TABLE!,
  repoName: 'conversations-user',
  keySerialize: (key: ConversationsUserBuilder['key']): ConversationsUserBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: `CONVERSATIONS_USER#${key.userId}`,
    };
  },
  entitySerialize: (
    key: ConversationsUserBuilder['key'],
    entityCreate: ConversationsUserCreate
  ): ConversationsUserStore => {
    const mappedKey: ConversationsUserBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: `CONVERSATIONS_USER#${key.userId}`,
    };
    const timers: ConversationsUserBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return {
      ...mappedKey,
      ...entityCreate,
      ...timers,
    };
  },
  entityDeserialize: (entityStore: ConversationsUserStore): ConversationsUser => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      tenantId: pk,
      userId: sk.split('#')[1],
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type ConversationsUserRepoEvent = RepositoryEvent<ConversationsUserBuilder>;
