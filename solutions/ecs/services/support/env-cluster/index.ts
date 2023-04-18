import { Service } from '@sinapsis-co/cc-core/common/service';

import { FargateClusterPrefab } from '@sinapsis-co/cc-core/prefab/compute/fargate/cluster';
import { GlobalCoordinator } from '../../../config/config-type';
import { EnvVpc } from '../env-vpc';

type Deps = {
  envVpc: EnvVpc;
};
const depsNames: Array<keyof Deps> = ['envVpc'];

export class EnvCluster extends Service<GlobalCoordinator> {
  public fargateClusterPrefab: FargateClusterPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, EnvCluster.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    this.fargateClusterPrefab = new FargateClusterPrefab(this, {
      name: this.props.envName,
      vpcPrefab: deps.envVpc.vpcPrefab,
    });
  }
}
