import { Service } from '@sinapsis-co/cc-core/common/service';

import { PublicAlbPrefab } from '@sinapsis-co/cc-core/prefab/gateway/alb-public';
import { GlobalCoordinator } from '../../../config/config-type';
import { DnsSubdomainCertificate } from '../dns-subdomain-certificate';
import { EnvVpc } from '../env-vpc';

type Deps = {
  envVpc: EnvVpc;
  dnsSubdomainCertificate: DnsSubdomainCertificate;
};
const depsNames: Array<keyof Deps> = ['envVpc', 'dnsSubdomainCertificate'];

export class EnvAlb extends Service<GlobalCoordinator> {
  public albPrefab: PublicAlbPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, EnvAlb.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    this.albPrefab = new PublicAlbPrefab(this, {
      name: 'global-alb',
      vpc: deps.envVpc.vpcPrefab.vpc,
      certificate: deps.dnsSubdomainCertificate.certificatePrefab.certificate,
    });
  }
}
