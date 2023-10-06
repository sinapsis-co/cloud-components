import { Service } from '@sinapsis-co/cc-core/common/service';
import { QueueFunction } from '@sinapsis-co/cc-core/prefab/compute/function/queue-function';

import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { GlobalCoordinator } from '@sinapsis-co/cc-services/config/config-type';
import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';

import { Database } from 'services/support/database';
import { productEvent } from './catalog';

class Dep extends ServiceDependencies {
  @DepCheck() globalEventBus: GlobalEventBus;
  @DepCheck() database: Database;
}

export class Product extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Product.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    new QueueFunction(this, {
      name: 'msg-product-uploaded',
      baseFunctionFolder: __dirname,
      eventBus: dep.globalEventBus.eventBusPrefab,
      queuePrefabParams: {
        eventBus: dep.globalEventBus.eventBusPrefab,
        eventConfig: [productEvent.productCsvUploaded.eventConfig],
      },
      modifiers: [dep.database.rdsClusterPrefab.useModWriter()],
    });
  }
}
