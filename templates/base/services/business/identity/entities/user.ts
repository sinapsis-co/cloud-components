import {
  Entity,
  EntityBuilder,
  EntityCreate,
  EntityStore,
  EntityUpdate,
} from '@sinapsis-co/cc-platform/integrations/repository/interface';
import { AuthScope } from '../platform/authorization';
import { IdentityTableBuilder } from '../repository/identity-table';

export type UserBuilder = EntityBuilder<{
  name: 'user';
  body: {
    email: string;
    givenName: string;
    familyName: string;
    companyName: string;
    role: AuthScope;
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
}>;

export type User = Entity<UserBuilder>;

export type UserStore = EntityStore<UserBuilder, IdentityTableBuilder>;

export type UserCreate = EntityCreate<UserBuilder>;

export type UserUpdate = Pick<EntityUpdate<UserBuilder>, 'givenName' | 'familyName'>;

export type FullLocation = Partial<{
  address: string;
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
  neighborhood: string;
  zipCode: string;
  countryCode: string;
}>;

export type GeoCode = {
  lat: number;
  lng: number;
};
