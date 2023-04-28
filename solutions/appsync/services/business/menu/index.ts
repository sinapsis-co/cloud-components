import { Service } from '@sinapsis-co/cc-core/common/service';

import { DynamoTablePrefab } from '@sinapsis-co/cc-core/prefab/storage/dynamo/table';
import { GlobalCoordinator } from '../../../config/config-type';
import { GlobalEventBus } from '../../support/global-event-bus';
import { GraphqlApi } from '../graphql-api';
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
    const ingredientsTableDataSource = deps.graphqlApi.appSyncPrefab.addDynamoTableDataSource(ingredientsTable);
    deps.graphqlApi.appSyncPrefab.addFunctionResolver({
      baseApiFolder: __dirname,
      dataSource: ingredientsTableDataSource,
      typeName: 'Query',
      fieldName: 'getIngredient',
    });
    deps.graphqlApi.appSyncPrefab.addFunctionResolver({
      baseApiFolder: __dirname,
      dataSource: ingredientsTableDataSource,
      typeName: 'Query',
      fieldName: 'listIngredients',
    });
    deps.graphqlApi.appSyncPrefab.addFunctionResolver({
      baseApiFolder: __dirname,
      dataSource: ingredientsTableDataSource,
      typeName: 'Mutation',
      fieldName: 'addIngredient',
    });
  }
}
