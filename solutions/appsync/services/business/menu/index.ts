import { Service } from '@sinapsis-co/cc-core/common/service';

import { DepCheck } from '@sinapsis-co/cc-core/common/coordinator';
import { AppSyncResolverAggregate } from '@sinapsis-co/cc-core/prefab/gateway/app-sync/resolver-aggregate';
import { DynamoTablePrefab } from '@sinapsis-co/cc-core/prefab/storage/dynamo/table';
import { GlobalCoordinator } from '../../../config/config-type';
import { GlobalEventBus } from '../../support/global-event-bus';
import { GraphqlApi } from '../../support/graphql-api';
import { IngredientResolver } from './catalog/schema/ingredient';
import { ingredientsTableBuilder } from './repository/table-ingredient';

class Dep {
  @DepCheck()
  globalEventBus: GlobalEventBus;
  @DepCheck()
  graphqlApi: GraphqlApi;
  // cdnApi: CdnApi;
  // identity: Identity;
}

export class Menu extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Menu.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    const ingredientsTable = new DynamoTablePrefab(this, ingredientsTableBuilder);

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
