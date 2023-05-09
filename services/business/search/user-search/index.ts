import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/event-function/event-aggregate';
import { RuntimeSecret } from '@sinapsis-co/cc-core/prefab/util/config/runtime-secret';

import { Identity } from '@sinapsis-co/cc-services/business/identity/multi-tenant';
import { repoUser } from '@sinapsis-co/cc-services/business/identity/multi-tenant/repository/repo-user';
import { GlobalCoordinator } from '@sinapsis-co/cc-services/config/config-type';
import { CdnApi } from '@sinapsis-co/cc-services/support/cdn-api';
import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';

import { searchApi, searchSecret } from './catalog';

class Dep extends ServiceDependencies {
  @DepCheck()
  globalEventBus: GlobalEventBus;
  @DepCheck()
  cdnApi: CdnApi;
  @DepCheck()
  identity: Identity;
}
export class Search extends Service<GlobalCoordinator> {
  public apiAggregate: ApiAggregate;
  public eventAggregate: EventAggregate;
  public secret: RuntimeSecret;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Search.name, ServiceDependencies);
    coordinator.addService(this);
  }

  build(deps: Dep) {
    this.secret = new RuntimeSecret(this, searchSecret.algolia);

    this.eventAggregate = new EventAggregate(this, {
      eventBus: deps.globalEventBus.eventBusPrefab,
      baseFunctionFolder: __dirname,
      handlers: {
        entityChanged: {
          name: 'event-entity-changed',
          eventConfig: Object.values(repoUser.events),
          modifiers: [this.secret.useModReader()],
          environment: {
            ENV_NAME: this.props.envName,
          },
        },
      },
    });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'search',
      baseFunctionFolder: __dirname,
      eventBus: deps.globalEventBus.eventBusPrefab,
      cdnApiPrefab: deps.cdnApi.cdnApiPrefab,
      authPool: deps.identity.authPool,
      handlers: {
        search: {
          ...searchApi.search.definition,
          modifiers: [this.secret.useModReader()],
          environment: {
            ENV_NAME: this.props.envName,
          },
        },
      },
    });
  }
}
