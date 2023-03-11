import { Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/api-function/api-aggregate';

import { GlobalCoordinator } from '../../../config/config-type';
import { CdnApi } from '../../support/cdn-api';
import { GlobalEventBus } from '../../support/global-event-bus';
import { Identity } from '../identity';
import { baseApi } from './catalog';

type Deps = {
  globalEventBus: GlobalEventBus;
  cdnApi: CdnApi;
  identity: Identity;
};
const depsNames: Array<keyof Deps> = ['globalEventBus', 'cdnApi', 'identity'];

export class BaseCrud extends Service<GlobalCoordinator> {
  public apiAggregate: ApiAggregate;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, BaseCrud.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'base',
      baseFunctionFolder: __dirname,
      eventBus: deps.globalEventBus.eventBusPrefab,
      cdnApiPrefab: deps.cdnApi.cdnApiPrefab,
      authPool: deps.identity.authPool,
      useRestApi: true,
      autoEventsEnabled: true,
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
