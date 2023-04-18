import { Service } from '@sinapsis-co/cc-core/common/service';
import { FargateServicePrefab } from '@sinapsis-co/cc-core/prefab/compute/fargate/service';
import { ApiAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/api-function/api-aggregate';
import { ParameterSecret } from '@sinapsis-co/cc-core/prefab/util/config/parameter-secret';
import { Duration } from 'aws-cdk-lib';
import { Secret } from 'aws-cdk-lib/aws-ecs';

import { GlobalCoordinator } from '../../../config/config-type';
import { DnsSubdomainCertificate } from '../../support/dns-subdomain-certificate';
import { EnvAlb } from '../../support/env-alb';
import { EnvCluster } from '../../support/env-cluster';
import { EnvVpc } from '../../support/env-vpc';
import { performanceTunningMapper } from './config';

type Deps = {
  envVpc: EnvVpc;
  envAlb: EnvAlb;
  envCluster: EnvCluster;
  dnsSubdomainCertificate: DnsSubdomainCertificate;
};
const depsNames: Array<keyof Deps> = ['envVpc', 'envAlb', 'envCluster', 'dnsSubdomainCertificate'];

export class ContainerService extends Service<GlobalCoordinator> {
  public readonly apiAggregate: ApiAggregate;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, ContainerService.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    new FargateServicePrefab(this, {
      name: 'serviceOne',
      basePath: '/container/one',
      fargateClusterPrefab: deps.envCluster.fargateClusterPrefab,
      vpcPrefab: deps.envVpc.vpcPrefab,
      albPrefab: deps.envAlb.albPrefab,
      certificate: deps.dnsSubdomainCertificate.certificatePrefab.certificate,
      containerHealthCheck: {
        startPeriod: Duration.seconds(2),
        interval: Duration.seconds(5),
        command: ['CMD-SHELL', 'curl -f http://127.0.0.1:8080/api/status || exit 1'],
      },
      containerSecrets: { aSecret: Secret.fromSsmParameter(new ParameterSecret(this, { name: 'aSecret' }).secret) },
      containerEnv: { ENV_NAME: this.props.envName },
      // externalRepository: { repositoryName: 'container-two-image', tag: 'latest' },
      dockerBuildFolder: `${__dirname}/container-image`,
      mappingPort: 8080,
      healthCheckPath: '/api/status',
      performanceTunning: performanceTunningMapper[this.props.envName],
    });
  }
}
