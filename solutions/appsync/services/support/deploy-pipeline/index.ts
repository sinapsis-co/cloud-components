import { Service } from '@sinapsis-co/cc-core/common/service';
import { DeployPipelinePrefab } from '@sinapsis-co/cc-core/prefab/util/deploy-pipeline';
import { DeployTargetName, GlobalCoordinator } from '../../../config/config-type';

class Dep {}
export class DeployPipeline extends Service<GlobalCoordinator, DeployTargetName> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, DeployPipeline.name, Dep, 'deployPipeline');
    coordinator.addService(this);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  build(dep: Dep): void {
    new DeployPipelinePrefab(this, {
      preDeployCommands: ['cd templates/base && bash pre-deploy.bash'],
      // postDeployCommands: [`yarn deploy-spa ${this.props.envName} webapp`],
    });
  }
}
