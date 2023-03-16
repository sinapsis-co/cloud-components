import { Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { SpaPrefab } from '@sinapsis-co/cc-infra-v2/prefab/frontend/spa';

import { GlobalCoordinator } from '../../../config/config-type';
import { Identity } from '../../business/identity';
import { CdnApi } from '../../support/cdn-api';
import { DnsSubdomainCertificate } from '../../support/dns-subdomain-certificate';

type Deps = {
  identity: Identity;
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  cdnApi: CdnApi;
};
const depsNames: Array<keyof Deps> = ['identity', 'dnsSubdomainCertificate', 'cdnApi'];

export class SpaWebapp extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, SpaWebapp.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    new SpaPrefab(this, {
      subDomain: this.props.subdomain.spaWebapp,
      baseDir: 'frontend/spa-webapp',
      certificate: deps.dnsSubdomainCertificate.certificatePrefab.certificate,
      envVars: {
        calculatedSecrets: {
          SKIP_PREFLIGHT_CHECK: 'true',
          VITE_APP_API_URL: deps.cdnApi.cdnApiPrefab.baseUrl,
          ...deps.identity.authPool.frontendRefs,
        },
      },
    });
  }
}
