import {
  Entity,
  EntityBuilder,
  EntityCreate,
  EntityStore,
  EntityUpdate,
} from '@sinapsis-co/cc-platform-v2/repository/interface';
import { AuthScope } from '../platform/authorization';

export type UserProfileBackofficeBuilder = EntityBuilder<{
  name: 'user-profile-backoffice';
  body: {
    email: string;
    givenName: string;
    familyName: string;
    role: AuthScope;
    avatar?: string;
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
    };
    timers: {
      createdAt: string;
      updatedAt: string;
    };
  };
}>;

export type UserProfileBackoffice = Entity<UserProfileBackofficeBuilder>;

export type UserProfileBackofficeStore = EntityStore<UserProfileBackofficeBuilder>;

export type UserProfileBackofficeCreate = EntityCreate<UserProfileBackofficeBuilder>;

export type UserProfileBackofficeUpdate = Pick<EntityUpdate<UserProfileBackofficeBuilder>, 'givenName' | 'familyName'>;
