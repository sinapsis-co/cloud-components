import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { AppSyncResolverAggregate } from '@sinapsis-co/cc-core/prefab/gateway/app-sync/resolver-aggregate';
import { DynamoTablePrefab } from '@sinapsis-co/cc-core/prefab/storage/dynamo/table';

import { GlobalCoordinator } from 'solutions/graphql/config/config-type';
import { GraphqlApi } from 'solutions/graphql/services/support/graphql-api';
import { ProductResolver } from './catalog/schema/product';
import { ProductsStoreTable } from './store/table-product';

class Dep extends ServiceDependencies {
  @DepCheck()
  graphqlApi: GraphqlApi;
}

export class Product extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Product.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    const productsTable = new DynamoTablePrefab(this, ProductsStoreTable);

    new AppSyncResolverAggregate<ProductResolver>(this, {
      appSyncPrefab: dep.graphqlApi.appSyncPrefab,
      baseApiFolder: __dirname,
      tablePrefab: productsTable,
      resolvers: {
        productGet: { typeName: 'Query' },
        productList: { typeName: 'Query' },
        productCreate: {
          typeName: 'Mutation',
          resolversPipeline: [
            { name: 'store' },
            { name: 'dispatch', dataSource: dep.graphqlApi.appSyncPrefab.eventBridgeDataSource },
          ],
        },
      },
    });
  }
}
