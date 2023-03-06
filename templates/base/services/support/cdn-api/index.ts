import { Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { CdnApiPrefab } from '@sinapsis-co/cc-infra-v2/prefab/gateway/cdn-api';
import { GlobalCoordinator } from '../../../config/config-type';

import { DnsSubdomainCertificate } from '../dns-subdomain-certificate';

type Deps = {
  dnsSubdomainCertificate: DnsSubdomainCertificate;
};
const depsNames: Array<keyof Deps> = ['dnsSubdomainCertificate'];

export class CdnApi extends Service<GlobalCoordinator> {
  public cdnApiPrefab: CdnApiPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, CdnApi.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    this.cdnApiPrefab = new CdnApiPrefab(this, {
      subDomain: this.props.subdomain.api,
      certificate: deps.dnsSubdomainCertificate.certificatePrefab.certificate,
    });
  }
}
