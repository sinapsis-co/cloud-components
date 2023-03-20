import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { ParameterSecret } from '@sinapsis-co/cc-infra/prefab/config/parameter-secret';
import { ApiAggregate } from '@sinapsis-co/cc-infra/prefab/function/api-function/api-aggregate';
import {
    FargateContainerConstruct,
    FargatePerformanceTunning
} from '@sinapsis-co/cc-infra/services/fargate-container';
import { Duration } from 'aws-cdk-lib';
import { Secret } from 'aws-cdk-lib/aws-ecs';

import { GlobalServiceDependencies } from '..';
import { AllowedEnvName, GlobalProps } from '../../../config/config-type';

export type ContainerServiceTwoParams = GlobalServiceDependencies;

export class ContainerServiceTwo extends Service<GlobalProps, ContainerServiceTwoParams> {
  public readonly apiAggregate: ApiAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: ContainerServiceTwoParams) {
    super(scope, ContainerServiceTwo.name, globalProps, { params });

    const performanceTunningMapper: Record<AllowedEnvName, FargatePerformanceTunning> = {
      dev: {
        taskCpu: '256',
        taskMemory: '512',
        containerDesiredCount: 1,
        taskAutoScaleMin: 1,
        taskAutoScaleMax: 2,
        taskAutoScalePercent: 75,
        containerMaxMemory: 75,
      },
      staging: {
        taskCpu: '256',
        taskMemory: '512',
        containerDesiredCount: 1,
        taskAutoScaleMin: 1,
        taskAutoScaleMax: 1,
        taskAutoScalePercent: 75,
        containerMaxMemory: 75,
      },
    };

    new FargateContainerConstruct(this, {
      name: 'serviceTwo',
      basePath: '/container/two',
      vpcConstruct: params.envVpc.vpcConstruct,
      albConstruct: params.envAlb.albConstruct,
      certificate: params.dnsSubdomainCertificate.certificate,
      containerHealthCheck: {
        startPeriod: Duration.seconds(2),
        interval: Duration.seconds(5),
        command: ['CMD-SHELL', 'curl -f http://127.0.0.1:8080/api/status || exit 1'],
      },
      containerSecrets: { aSecret: Secret.fromSsmParameter(new ParameterSecret(this, { name: 'aSecret' }).secret) },
      containerEnv: { ENV_NAME: this.props.envName },
      mappingPort: 8080,
      healthCheckPath: '/api/status',
      performanceTunning: performanceTunningMapper[this.props.envName],
      externalRepository: {
        repositoryName: 'container-two-image',
        tag: 'latest',
      },
    });
  }
}
