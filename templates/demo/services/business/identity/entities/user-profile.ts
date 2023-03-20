import {
    Entity,
    EntityBuilder,
    EntityCreate,
    EntityStore,
    EntityUpdate
} from '@sinapsis-co/cc-platform/repository/interface';
import { AuthScope } from '../platform/authorization';
import { FullLocation } from './user-full-location';

export type UserProfileBuilder = EntityBuilder<{
  name: 'user-profile';
  body: {
    email: string;
    givenName: string;
    familyName: string;
    role: AuthScope;
    companyName: string;
    avatar?: string;
    isPending?: boolean;
    inviteId?: string;
    location?: FullLocation;
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
