import { Service } from '@sinapsis-co/cc-core/common/service';

import { AppSyncResolverAggregate } from '@sinapsis-co/cc-core/prefab/gateway/app-sync/resolver-aggregate';
import { DynamoTablePrefab } from '@sinapsis-co/cc-core/prefab/storage/dynamo/table';
import { GlobalCoordinator } from '../../../config/config-type';
import { GlobalEventBus } from '../../support/global-event-bus';
import { GraphqlApi } from '../../support/graphql-api';
import { ingredientsTableBuilder } from './repository/table-ingredient';
import { IngredientResolver } from './schema/ingredient';

type Deps = {
  globalEventBus: GlobalEventBus;
  graphqlApi: GraphqlApi;
  // cdnApi: CdnApi;
  // identity: Identity;
};
// const depsNames: Array<keyof Deps> = ['globalEventBus', 'cdnApi', 'identity'];
const depsNames: Array<keyof Deps> = ['globalEventBus', 'graphqlApi'];

export class Menu extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Menu.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    const ingredientsTable = new DynamoTablePrefab(this, ingredientsTableBuilder);

    new AppSyncResolverAggregate<IngredientResolver>(this, {
      appSyncPrefab: deps.graphqlApi.appSyncPrefab,
      baseApiFolder: __dirname,
      tablePrefab: ingredientsTable,
      resolvers: {
        ingredientGet: { typeName: 'Query' },
        ingredientList: { typeName: 'Query' },
        ingredientCreate: {
          typeName: 'Mutation',
          resolversPipeline: [
            { name: 'ingredientCreate' },
            { name: 'ingredientDispatch', dataSource: deps.graphqlApi.appSyncPrefab.eventBridgeDataSource },
          ],
        },
      },
    });
  }
}
