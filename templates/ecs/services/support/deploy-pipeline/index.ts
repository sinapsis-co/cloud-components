import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { DeployPipelineConstruct } from '@sinapsis-co/cc-infra/services/deploy-pipeline';

import { GlobalProps } from '../../../config/config-type';

export class DeployPipeline extends Service<GlobalProps> {
  constructor(scope: Construct, globalProps: GlobalProps) {
    super(scope, DeployPipeline.name, globalProps, { deployConfigName: 'deploy' });

    new DeployPipelineConstruct(this, {
      // fullClone: true,
      preDeployCommands: ['cd templates/ecs && bash pre-deploy.bash'],
      // postDeployCommands: [`yarn deploy-spa ${this.props.envName} webapp`],
    });
  }
}
