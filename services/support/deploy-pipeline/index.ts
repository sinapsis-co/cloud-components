import { ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { DeployPipelinePrefab } from '@sinapsis-co/cc-core/prefab/util/deploy-pipeline';

import { DeployTargetName, GlobalCoordinator } from '@sinapsis-co/cc-services/config/config-type';

class Dep extends ServiceDependencies {}

export class DeployPipeline extends Service<GlobalCoordinator, DeployTargetName> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, DeployPipeline.name, Dep, 'deployPipeline');
    coordinator.addService(this);
  }
  build(dep: Dep): void {
    new DeployPipelinePrefab(this, {
      preDeployCommands: ['cd templates/base && bash pre-deploy.bash'],
      // postDeployCommands: [`yarn deploy-spa ${this.props.envName} webapp`],
    });
  }
}
