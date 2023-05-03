import { Service } from '@sinapsis-co/cc-core/common/service';

import { DepCheck } from '@sinapsis-co/cc-core/common/coordinator';
import { FargateClusterPrefab } from '@sinapsis-co/cc-core/prefab/compute/fargate/cluster';
import { GlobalCoordinator } from '../../../config/config-type';
import { EnvVpc } from '../env-vpc';

class Dep {
  @DepCheck()
  envVpc: EnvVpc;
}

export class EnvCluster extends Service<GlobalCoordinator> {
  public fargateClusterPrefab: FargateClusterPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, EnvCluster.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    this.fargateClusterPrefab = new FargateClusterPrefab(this, {
      name: this.props.envName,
      vpcPrefab: dep.envVpc.vpcPrefab,
    });
  }
}
