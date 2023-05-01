import { Service } from '@sinapsis-co/cc-core/common/service';

import { AppSyncPrefab } from '@sinapsis-co/cc-core/prefab/gateway/app-sync';
import { DynamoTablePrefab } from '@sinapsis-co/cc-core/prefab/storage/dynamo/table';
import { GlobalCoordinator } from '../../../config/config-type';
import { GlobalEventBus } from '../../support/global-event-bus';
import { GraphqlApi } from '../../support/graphql-api';
import { ingredientsTableBuilder } from './table/table-ingredient';

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
    const eventBridgeDataSource = AppSyncPrefab.eventBridgeDataSource(this, {
      api: deps.graphqlApi.appSyncPrefab.api,
      eventBusPrefab: deps.globalEventBus.eventBusPrefab,
    });

    AppSyncPrefab.serviceResolver(this, {
      baseApiFolder: __dirname,
      api: deps.graphqlApi.appSyncPrefab.api,
      tablePrefab: ingredientsTable,
      resolvers: [
        { typeName: 'Query', fieldName: 'getIngredient' },
        { typeName: 'Query', fieldName: 'listIngredients' },
        {
          typeName: 'Mutation',
          fieldName: 'addIngredient',
          resolversPipeline: [
            { name: 'addIngredientCreate' },
            { name: 'addIngredientDispatch', dataSource: eventBridgeDataSource },
          ],
        },
      ],
    });
    // deps.graphqlApi.appSyncPrefab.addFunctionResolver({
    //   baseApiFolder: __dirname,
    //   dataSource: ingredientsTableDataSource,
    //   typeName: 'Query',
    //   fieldName: 'getIngredient',
    // });
    // deps.graphqlApi.appSyncPrefab.addFunctionResolver({
    //   baseApiFolder: __dirname,
    //   dataSource: ingredientsTableDataSource,
    //   typeName: 'Query',
    //   fieldName: 'listIngredients',
    // });
    // deps.graphqlApi.appSyncPrefab.addFunctionResolver({
    //   baseApiFolder: __dirname,
    //   dataSource: ingredientsTableDataSource,
    //   typeName: 'Mutation',
    //   fieldName: 'addIngredient',
    // });
  }
}
