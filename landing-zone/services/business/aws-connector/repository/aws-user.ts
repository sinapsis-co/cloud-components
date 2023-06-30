import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { AwsUser, AwsUserBuilder, AwsUserCreate, AwsUserStore } from '../entities/aws-user';

export const awsUserRepo = repository<AwsUserBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'aws-user',
  keySerialize: (key: AwsUserBuilder['key']): AwsUserBuilder['storeMapping']['key'] => {
    return {
      pk: `user#${key.tenantId}`,
      sk: key.id,
    };
  },
  entitySerialize: (key: AwsUserBuilder['key'], entityCreate: AwsUserCreate): AwsUserStore => {
    const mappedKey: AwsUserBuilder['storeMapping']['key'] = {
      pk: `user#${key.tenantId}`,
      sk: key.id,
    };
    const timers: AwsUserBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: AwsUserStore): AwsUser => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    const tenantId = pk.split('#')[1];
    return {
      ...att,
      tenantId,
      id: sk,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type AwsUserRepoEvent = RepositoryEvent<AwsUserBuilder>;
