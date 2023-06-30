import { Model } from '@sinapsis-co/cc-sdk/model';

export type LandingModel = Model<{
  type: 'landing';
  key: {
    id: string;
  };
  body: {
    name: string;
    role: string;
    status: 'Pending' | 'Completed' | 'Failed';
    linkedLandingZone?: string;
  };
}>;

export type Landing = LandingModel['Entity'];
export type LandingCreate = LandingModel['Create'];
export type LandingList = LandingModel['List'];
