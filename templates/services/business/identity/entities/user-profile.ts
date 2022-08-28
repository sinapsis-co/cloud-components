import {
  Entity,
  EntityBuilder,
  EntityCreate,
  EntityStore,
  EntityUpdate,
} from '@sinapsis-co/cc-platform-v2/repository/interface';

export type UserProfileBuilder = EntityBuilder<{
  name: 'user-profile';
  body: {
    email: string;
    givenName: string;
    familyName: string;
    role: string;
    permission: string;
    companyName: string;
    avatar?: string;
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

export type UserProfile = Entity<UserProfileBuilder>;

export type UserProfileStore = EntityStore<UserProfileBuilder>;

export type UserProfileCreate = EntityCreate<UserProfileBuilder>;

export type UserProfileUpdate = Pick<EntityUpdate<UserProfileBuilder>, 'givenName' | 'familyName'>;
