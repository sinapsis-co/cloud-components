import { View } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/view';
import { view } from '@sinapsis-co/cc-sdk/integration/store/dynamo/view';
import { InviteModel } from '../model/invite';
import { UserModel } from '../model/user';
import { IdentityStoreTable } from '../store/table-identity';

export const identityView: View<UserModel | InviteModel> = view(IdentityStoreTable, {
  tableName: 'identity',
});
