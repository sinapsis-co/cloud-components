import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { AppSyncResolverAggregate } from '@sinapsis-co/cc-core/prefab/gateway/app-sync/resolver-aggregate';
import { DynamoTablePrefab } from '@sinapsis-co/cc-core/prefab/storage/dynamo/table';

import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';

import { GlobalCoordinator } from 'solutions/graphql/config/config-type';
import { GraphqlApi } from 'solutions/graphql/services/support/graphql-api';
import { SaleResolver } from './catalog/schema/sale';
import { StoreTableSale } from './store/table-sale';

class Dep extends ServiceDependencies {
  @DepCheck()
  globalEventBus: GlobalEventBus;
  @DepCheck()
  graphqlApi: GraphqlApi;
}

export class Sales extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Sales.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    const salesTable = new DynamoTablePrefab(this, StoreTableSale);

    new AppSyncResolverAggregate<SaleResolver>(this, {
      appSyncPrefab: dep.graphqlApi.appSyncPrefab,
      baseApiFolder: __dirname,
      tablePrefab: salesTable,
      resolvers: {
        saleGet: { typeName: 'Query' },
        saleList: { typeName: 'Query' },
        saleByProduct: { typeName: 'Query' },
        saleCreate: {
          typeName: 'Mutation',
          resolversPipeline: [
            { name: 'store' },
            { name: 'dispatch', dataSource: dep.graphqlApi.appSyncPrefab.eventBridgeDataSource },
          ],
          env: { _envName_: this.props.envName },
        },
      },
    });
  }
}
