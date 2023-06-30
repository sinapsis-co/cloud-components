import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type AwsTempCredBuilder = EntityBuilder<{
  name: 'aws-temp-cred';
  body: {
    deleteTTL: number;
    consoleAccess: {
      username: string;
      password: string;
    };
    programmaticAccess: {
      accessKey: string;
      secretKey: string;
    };
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
      pk: string;
      sk: string;
    };
    timers: {
      createdAt: string;
      updatedAt: string;
    };
  };
}>;

export type AwsTempCred = Entity<AwsTempCredBuilder>;

export type AwsTempCredStore = EntityStore<AwsTempCredBuilder>;

export type AwsTempCredCreate = EntityCreate<AwsTempCredBuilder>;
