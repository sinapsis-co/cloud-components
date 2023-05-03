import { Model } from '@sinapsis-co/cc-sdk/model';

import { FullLocation } from '../entities/location';
import { IdentityTableBuilder } from '../repository/table-identity';

export type UserModel = Model<
  {
    name: 'user';
    body: {
      email: string;
      givenName: string;
      familyName: string;
      // companyName: string;
      // role: AuthScope;
      orgOwner?: boolean;
      isClient?: boolean;
      avatar?: string;
      location?: FullLocation;
      createdAt: string;
      updatedAt: string;
    };
    key: {
      orgId?: string;
      workspaceId?: string;
      id: string;
    };
  },
  {
    storeBuilder: IdentityTableBuilder;
    omittedCreateKeys: ['email' | 'orgOwner' | 'avatar' | 'isClient'];
    omittedUpdateKeys: ['email' | 'orgOwner' | 'avatar' | 'isClient'];
  }
>;
