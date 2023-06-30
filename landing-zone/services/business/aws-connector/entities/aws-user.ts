import {
  Entity,
  EntityBuilder,
  EntityCreate,
  EntityStore,
  EntityUpdate,
} from '@sinapsis-co/cc-platform-v2/repository/interface';

export type EnvPermission = 'dev' | 'staging' | 'prod';

export type AwsUserBuilder = EntityBuilder<{
  name: 'aws-user';
  body: {
    email: string;
    accessKeyId: string;
    envAccess: EnvPermission[];
  };
  key: {
    tenantId: string;
    id: string;
  };
  timers: {
    createdAt: Date;
    updatedAt: Date;
  };
  storeMapping: {
    key: {
      pk: string;
      sk: string;
    };
    timers: {
      createdAt: string;
      updatedAt: string;
    };
  };
}>;

export type AwsUser = Entity<AwsUserBuilder>;

export type AwsUserStore = EntityStore<AwsUserBuilder>;

export type AwsUserCreate = EntityCreate<AwsUserBuilder>;

export type AwsUserUpdate = Pick<EntityUpdate<AwsUserBuilder>, 'envAccess'>;
