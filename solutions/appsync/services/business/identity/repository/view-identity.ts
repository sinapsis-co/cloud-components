import { View } from '@sinapsis-co/cc-sdk/integration/database/dynamo/types/view';
import { view } from '@sinapsis-co/cc-sdk/integration/database/dynamo/view';
import { InviteModel } from '../model/invite';
import { UserModel } from '../model/user';

type EntityBuilderView = UserModel['Builder'] | InviteModel['Builder'];
type StoreBuilderView = UserModel['StoreBuilder'] | InviteModel['StoreBuilder'];
type EntityView = UserModel['Entity'] | InviteModel['Entity'];
type StoreView = UserModel['Store'] | InviteModel['Store'];

export const identityView: View<EntityBuilderView, StoreBuilderView> = view({
  tableName: 'identity',
  entityDeserialize: (entityStore: StoreView): EntityView => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, id] = sk.split('#');
    return {
      ...att,
      tenantId: pk,
      id,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});
