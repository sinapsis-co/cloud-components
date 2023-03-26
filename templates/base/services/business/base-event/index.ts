import { Service } from '@sinapsis-co/cc-infra/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra/prefab/compute/function/api-function/api-aggregate';

import { GlobalCoordinator } from '../../../config/config-type';
import { CdnApi } from '../../support/cdn-api';
import { GlobalEventBus } from '../../support/global-event-bus';
import { Identity } from '../identity';

import { otherApi } from './catalog';
import { otherTableBuilder } from './repository/other-table';

type Deps = {
  globalEventBus: GlobalEventBus;
  cdnApi: CdnApi;
  identity: Identity;
};
const depsNames: Array<keyof Deps> = ['globalEventBus', 'cdnApi', 'identity'];
export class BaseEvent extends Service<GlobalCoordinator> {
  public apiAggregate: unknown;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, BaseEvent.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'other',
      baseFunctionFolder: __dirname,
      eventBus: deps.globalEventBus.eventBusPrefab,
      cdnApiPrefab: deps.cdnApi.cdnApiPrefab,
      authPool: deps.identity.authPool,
      tableBuilder: otherTableBuilder,
      handlers: {
        create: otherApi.create.config,
        get: otherApi.get.config,
        list: otherApi.list.config,
        delete: otherApi.delete.config,
        update: otherApi.update.config,
      },
    });
  }
}
