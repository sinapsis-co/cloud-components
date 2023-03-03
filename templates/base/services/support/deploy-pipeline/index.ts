import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { DeployPipelinePrefab } from '@sinapsis-co/cc-infra-v2/prefab/util/deploy-pipeline';
import { GlobalProps } from '../../../config/config-type';

export class DeployPipeline extends Service<GlobalProps> {
  constructor(scope: Construct, globalProps: GlobalProps, params = {}) {
    super(scope, DeployPipeline.name, globalProps, { params, deployConfigName: 'deploy' });

    new DeployPipelinePrefab(this, {
      preDeployCommands: ['cd templates/base && bash pre-deploy.bash'],
      // fullClone: true,
      // postDeployCommands: [`yarn deploy-spa ${this.props.envName} webapp`],
    });
  }
}
