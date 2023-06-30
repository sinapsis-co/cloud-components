import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { AwsAccount, AwsAccountBuilder, AwsAccountCreate, AwsAccountStore } from '../entities/aws-account';

export const awsAccountRepo = repository<AwsAccountBuilder>({
  tableName: process.env.ACCOUNT_TABLE!,
  repoName: 'aws-account',
  keySerialize: (key: AwsAccountBuilder['key']): AwsAccountBuilder['storeMapping']['key'] => {
    return {
      pk: key.projectName,
      sk: key.envName,
    };
  },
  entitySerialize: (key: AwsAccountBuilder['key'], entityCreate: AwsAccountCreate): AwsAccountStore => {
    const mappedKey: AwsAccountBuilder['storeMapping']['key'] = {
      pk: key.projectName,
      sk: key.envName,
    };
    const timers: AwsAccountBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: AwsAccountStore): AwsAccount => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      projectName: pk,
      envName: sk,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type AwsAccountRepoEvent = RepositoryEvent<AwsAccountBuilder>;
