import { Service } from '@sinapsis-co/cc-core/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/api-function/api-aggregate';

import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { GlobalCoordinator } from '../../../config/config-type';
import { CdnApi } from '../../support/cdn-api';
import { GlobalEventBus } from '../../support/global-event-bus';
import { Identity } from '../identity';
import { baseApi } from './catalog';
import { baseTableBuilder } from './repository/table-base';

class Dep extends ServiceDependencies {
  @DepCheck()
  cdnApi: CdnApi;
  @DepCheck()
  globalEventBus: GlobalEventBus;
  @DepCheck()
  identity: Identity;
}

export class BaseCrud extends Service<GlobalCoordinator> {
  public apiAggregate: ApiAggregate;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, BaseCrud.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep) {
    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'base',
      baseFunctionFolder: __dirname,
      eventBus: dep.globalEventBus.eventBusPrefab,
      cdnApiPrefab: dep.cdnApi.cdnApiPrefab,
      authPool: dep.identity.authPool,
      tableBuilder: baseTableBuilder,
      handlers: {
        create: baseApi.create.config,
        get: baseApi.get.config,
        list: baseApi.list.config,
        delete: baseApi.delete.config,
        update: baseApi.update.config,
      },
    });
  }
}
