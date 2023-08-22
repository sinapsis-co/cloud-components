import { Service } from '@sinapsis-co/cc-core/common/service';
import { RdsClusterPrefab } from '@sinapsis-co/cc-core/prefab/storage/rds/cluster';

import { DepCheck } from '@sinapsis-co/cc-core/common/coordinator';

import { GlobalCoordinator } from 'config/config-type';

import { EnvVpc } from '@sinapsis-co/cc-services/support/env-vpc';

class Dep {
  @DepCheck() envVpc: EnvVpc;
}

export class Database extends Service<GlobalCoordinator> {
  public rdsClusterPrefab: RdsClusterPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Database.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    this.rdsClusterPrefab = new RdsClusterPrefab(this, {
      publicAccess: true,
      clusterName: 'database',
      vpcPrefab: dep.envVpc.vpcPrefab,
      performanceTunning: {
        readInstances: 0,
        minCapacity: 0.5,
        maxCapacity: 1,
      },
      scheduledPause: {
        startCron: { minute: '0', hour: '12', weekDay: '1-5' },
        stopCron: { minute: '0', hour: '22', weekDay: '1-5' },
      },
    });
  }
}
