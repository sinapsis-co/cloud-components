import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { AppSyncResolverAggregate } from '@sinapsis-co/cc-core/prefab/gateway/app-sync/resolver-aggregate';
import { DynamoTablePrefab } from '@sinapsis-co/cc-core/prefab/storage/dynamo/table';

import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';

import { GlobalCoordinator } from 'solutions/graphql/config/config-type';
import { GraphqlApi } from 'solutions/graphql/services/support/graphql-api';
import { IngredientResolver } from './catalog/schema/ingredient';
import { IngredientsTableBuilder } from './store/table-ingredient';

class Dep extends ServiceDependencies {
  @DepCheck()
  globalEventBus: GlobalEventBus;
  @DepCheck()
  graphqlApi: GraphqlApi;
}

export class Menu extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Menu.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    const ingredientsTable = new DynamoTablePrefab(this, IngredientsTableBuilder);

    new AppSyncResolverAggregate<IngredientResolver>(this, {
      appSyncPrefab: dep.graphqlApi.appSyncPrefab,
      baseApiFolder: __dirname,
      tablePrefab: ingredientsTable,
      resolvers: {
        ingredientGet: { typeName: 'Query' },
        ingredientList: { typeName: 'Query' },
        ingredientCreate: {
          typeName: 'Mutation',
          resolversPipeline: [
            { name: 'ingredientCreate' },
            { name: 'ingredientDispatch', dataSource: dep.graphqlApi.appSyncPrefab.eventBridgeDataSource },
          ],
        },
      },
    });
  }
}
