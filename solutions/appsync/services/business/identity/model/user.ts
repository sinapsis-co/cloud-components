import { Model } from '@sinapsis-co/cc-sdk/model';

import { FullLocation } from '../entities/location';
import { AuthScope } from '../platform/authorization';
import { IdentityTableBuilder } from '../repository/table-identity';

export type UserModel = Model<
  {
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
  },
  {
    storeBuilder: IdentityTableBuilder;
    omittedCreateKeys: ['email' | 'role' | 'companyName' | 'tenantOwner' | 'avatar'];
    omittedUpdateKeys: ['email' | 'role' | 'companyName' | 'tenantOwner' | 'avatar'];
  }
>;
