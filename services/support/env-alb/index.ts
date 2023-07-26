import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { PublicAlbPrefab } from '@sinapsis-co/cc-core/prefab/gateway/alb-public';

import { GlobalCoordinator } from '@sinapsis-co/cc-services/config/config-type';

import { DnsSubdomainCertificate } from '../dns-subdomain-certificate';
import { EnvVpc } from '../env-vpc';

class Dep extends ServiceDependencies {
  @DepCheck() envVpc: EnvVpc;
  @DepCheck() dnsSubdomainCertificate: DnsSubdomainCertificate;
}

export class EnvAlb extends Service<GlobalCoordinator> {
  public albPrefab: PublicAlbPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, EnvAlb.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    this.albPrefab = new PublicAlbPrefab(this, {
      name: 'global-alb',
      vpc: dep.envVpc.vpcPrefab.vpc,
      certificate: dep.dnsSubdomainCertificate.certificatePrefab.certificate,
    });
  }
}
