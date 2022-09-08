import { Service, Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { DeployPipelineConstruct } from '@sinapsis-co/cc-infra-v2/services/deploy-pipeline';

import { GlobalProps } from '../../../config/config-type';

export class DeployPipeline extends Service<GlobalProps> {
  constructor(scope: Construct, globalProps: GlobalProps) {
    super(scope, DeployPipeline.name, globalProps, { deployConfigName: 'deploy' });

    new DeployPipelineConstruct(this, {
      preDeployCommands: [
        'cd templates && yarn && yarn add -W @sinapsis-co/cc-infra-v2 && yarn add -W @sinapsis-co/cc-platform-v2 && echo "${$(cat config/index.ts)/"isDemoProject: true,"/"isDemoProject: false,"}" > config/index.ts',
      ],
      // postDeployCommands: [`yarn deploy-spa ${this.props.envName} webapp`],
    });
  }
}
