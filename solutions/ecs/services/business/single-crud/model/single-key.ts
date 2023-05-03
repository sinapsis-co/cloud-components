import { Model } from '@sinapsis-co/cc-sdk/model';
import { SingleTableStore } from '../repository/table-single';

export type SingleKey = Model<
  {
    name: 'single';
    key: {
      id: string;
    };
    body: {
      name: string;
      updatableAtt: string;
      optionalAtt?: string;
      createdAt: string;
      updatedAt: string;
    };
  },
  {
    storeBuilder: SingleTableStore;
  }
>;
