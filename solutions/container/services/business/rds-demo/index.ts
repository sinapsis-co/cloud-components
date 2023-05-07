import { Service } from '@sinapsis-co/cc-core/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/api-function/api-aggregate';
import { AuroraServerlessV2Prefab } from '@sinapsis-co/cc-core/prefab/storage/aurora/aurora-serverless-v2';

import { DepCheck } from '@sinapsis-co/cc-core/common/coordinator';
import { EnvVpc } from '@sinapsis-co/cc-services/support/env-vpc';

import { GlobalCoordinator } from 'config/config-type';
import { CdnApi } from '../../support/cdn-api';

class Dep {
  @DepCheck()
  cdnApi: CdnApi;
  @DepCheck()
  envVpc: EnvVpc;
}

export class RdsDemo extends Service<GlobalCoordinator> {
  public apiAggregate: ApiAggregate;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, RdsDemo.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    new AuroraServerlessV2Prefab(this, {
      clusterName: 'demo',
      vpcPrefab: dep.envVpc.vpcPrefab,
      performanceTunning: {
        instances: 1,
        minCapacity: 0.5,
        maxCapacity: 2,
      },
    });
    // this.apiAggregate = new ApiAggregate(this, {
    //   basePath: 'base',
    //   baseFunctionFolder: __dirname,
    //   cdnApiPrefab: deps.cdnApi.cdnApiPrefab,
    //   handlers: {
    //     create: baseApi.create.config,
    //     get: baseApi.get.config,
    //     list: baseApi.list.config,
    //     delete: baseApi.delete.config,
    //     update: baseApi.update.config,
    //   },
    // });
  }
}
