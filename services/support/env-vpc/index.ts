import { ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { VpcPrefab } from '@sinapsis-co/cc-core/prefab/networking/vpc';

import { GlobalCoordinator } from '@sinapsis-co/cc-services/config/config-type';

class Dep extends ServiceDependencies {}

export class EnvVpc extends Service<GlobalCoordinator> {
  public vpcPrefab: VpcPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, EnvVpc.name, Dep);
    coordinator.addService(this);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  build(dep: Dep): void {
    this.vpcPrefab = new VpcPrefab(this, { name: this.props.envName });
  }
}