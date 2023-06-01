import { Model } from '@sinapsis-co/cc-sdk/model';

export type WorkspaceModel = Model<
  {
    type: 'Workspace';
    body: {
      orgOwnerId: string;
      name: string;
    };
    key: {
      workspaceId: string;
    };
  },
  { omittedCreateKeys: ['orgOwnerId'] }
>;

export type Workspace = WorkspaceModel['Entity'];
