import * as _interface from '@sinapsis-co/cc-sdk/integration/database/dynamo/interface';
import { AuthScope } from '../platform/authorization';
import { IdentityTable } from '../table/table-identity';

export type UserEntity = _interface.EntityBuilder<{
  name: 'user';
  body: {
    email: string;
    givenName: string;
    familyName: string;
    companyName: string;
    tenantOwner?: true;
    role: AuthScope;
    avatar?: string;
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

export type User = _interface.Entity<UserEntity>;

export type UserStore = _interface.EntityStore<UserEntity, IdentityTable>;

export type UserCreate = _interface.EntityCreate<UserEntity>;

export type UserUpdate = Pick<_interface.EntityUpdate<UserEntity>, 'givenName' | 'familyName'>;

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
