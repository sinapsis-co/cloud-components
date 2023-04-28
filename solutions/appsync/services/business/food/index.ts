import { Service } from '@sinapsis-co/cc-core/common/service';

import { GlobalCoordinator } from '../../../config/config-type';
import { GlobalEventBus } from '../../support/global-event-bus';

type Deps = {
  globalEventBus: GlobalEventBus;
  // cdnApi: CdnApi;
  // identity: Identity;
};
// const depsNames: Array<keyof Deps> = ['globalEventBus', 'cdnApi', 'identity'];
const depsNames: Array<keyof Deps> = ['globalEventBus'];

export class Menu extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Menu.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    deps;

    // new AppSyncPrefab(this, {
    //   name: 'Menu',
    //   baseApiFolder: __dirname,
    // });
  }
}
