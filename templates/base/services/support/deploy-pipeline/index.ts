import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { DeployPipelineConstruct } from '@sinapsis-co/cc-infra-v2/services/deploy-pipeline';

import { GlobalProps } from '../../../config/config-type';

export class DeployPipeline extends Service<GlobalProps> {
  constructor(scope: Construct, globalProps: GlobalProps) {
    super(scope, DeployPipeline.name, globalProps, { deployConfigName: 'deploy' });

    new DeployPipelineConstruct(this, {
      // fullClone: true,
      preDeployCommands: ['cd templates/base && bash pre-deploy.bash'],
      // postDeployCommands: [`yarn deploy-spa ${this.props.envName} webapp`],
    });
  }
}
