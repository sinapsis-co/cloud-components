import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import {
  RecoverySubscriptionReport,
  RecoverySubscriptionReportBuilder,
  RecoverySubscriptionReportCreate,
  RecoverySubscriptionReportStore,
} from '../entities/recoverySubscriptionReport';

export const recoverySubscriptionReportRepo = repository<RecoverySubscriptionReportBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'recoverySubscriptionReport',
  keySerialize: (
    key: RecoverySubscriptionReportBuilder['key']
  ): RecoverySubscriptionReportBuilder['storeMapping']['key'] => {
    return {
      pk: `${key.tenantId}`,
      sk: `${key.userId}#${key.id}`,
    };
  },
  entitySerialize: (
    key: RecoverySubscriptionReportBuilder['key'],
    entityCreate: RecoverySubscriptionReportCreate
  ): RecoverySubscriptionReportStore => {
    const mappedKey: RecoverySubscriptionReportBuilder['storeMapping']['key'] = {
      pk: `${key.tenantId}`,
      sk: `${key.userId}#${key.id}`,
    };
    const timers: RecoverySubscriptionReportBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: RecoverySubscriptionReportStore): RecoverySubscriptionReport => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      tenantId: pk,
      userId: sk.split('#')[0],
      id: sk.split('#')[1],
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type RecoverySubscriptionReportRepoEvent = RepositoryEvent<RecoverySubscriptionReportBuilder>;
