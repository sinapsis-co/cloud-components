import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { AwsTempCred, AwsTempCredBuilder, AwsTempCredCreate, AwsTempCredStore } from '../entities/aws-temp-cred';

export const awsTempRepo = repository<AwsTempCredBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'aws-temp-cred',
  keySerialize: (key: AwsTempCredBuilder['key']): AwsTempCredBuilder['storeMapping']['key'] => {
    return {
      pk: key.id,
      sk: 'temp',
    };
  },
  entitySerialize: (key: AwsTempCredBuilder['key'], entityCreate: AwsTempCredCreate): AwsTempCredStore => {
    const mappedKey: AwsTempCredBuilder['storeMapping']['key'] = {
      pk: key.id,
      sk: 'temp',
    };
    const timers: AwsTempCredBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: AwsTempCredStore): AwsTempCred => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      id: pk,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type AwsTempCredRepoEvent = RepositoryEvent<AwsTempCredBuilder>;
