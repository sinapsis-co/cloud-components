import { Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { DeployPipelinePrefab } from '@sinapsis-co/cc-infra-v2/prefab/util/deploy-pipeline';
import { DeployTargetName, GlobalCoordinator } from '../../../config/config-type';

type Deps = Record<string, never>;
const depsNames: Array<keyof Deps> = [];
export class DeployPipeline extends Service<GlobalCoordinator, DeployTargetName> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, DeployPipeline.name, depsNames, 'deployPipeline');
    coordinator.addService(this);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  build(_deps = {}) {
    new DeployPipelinePrefab(this, {
      preDeployCommands: ['cd templates/base && bash pre-deploy.bash'],
      // fullClone: true,
      // postDeployCommands: [`yarn deploy-spa ${this.props.envName} webapp`],
    });
  }
}
