import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type EnvPermission = 'dev' | 'staging' | 'prod';

export type EnrichedAwsAccount = {
  roleArn: string;
  color: string;
  localProfileConfig: string;
  consoleWebConsole: string;
};

export type AwsAccountBuilder = EntityBuilder<{
  name: 'aws-account';
  body: {
    email: string;
    account: string;
    roleName: string;
  };
  key: {
    projectName: string;
    envName: string;
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

export type AwsAccount = Entity<AwsAccountBuilder>;

export type AwsAccountStore = EntityStore<AwsAccountBuilder>;

export type AwsAccountCreate = EntityCreate<AwsAccountBuilder>;
