import { Service } from '@sinapsis-co/cc-core/common/service';
import { SsrPrefab } from '@sinapsis-co/cc-core/prefab/frontend/ssr';

import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { CdnApi } from '@sinapsis-co/cc-services/support/cdn-api';
import { DnsSubdomainCertificate } from '@sinapsis-co/cc-services/support/dns-subdomain-certificate';
import { GlobalCoordinator } from 'solutions/ssr/config/config-type';

class Dep extends ServiceDependencies {
  @DepCheck()
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  @DepCheck()
  cdnApi: CdnApi;
}

export class SsrLanding extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, SsrLanding.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep) {
    new SsrPrefab(this, {
      baseDir: 'frontend/webpage',
      distDir: '.open-next',
      certificate: dep.dnsSubdomainCertificate.certificatePrefab.certificate,
      subDomain: this.props.subdomain.ssrLanding,
      filesPathAssets: `${process.cwd()}/frontend/webpage/.open-next/assets`,
      filesPathImageFunction: `${process.cwd()}/frontend/webpage/.open-next/image-optimization-function`,
      filesPathMiddlewareFunction: `${process.cwd()}/frontend/webpage/.open-next/middleware-function`,
      filesPathNextFunction: `${process.cwd()}/frontend/webpage/.open-next/server-function`,
      calculatedSecrets: {
        SKIP_PREFLIGHT_CHECK: 'true',
        REACT_APP_API_URL: dep.cdnApi.cdnApiPrefab.baseUrl,
      },
    });
  }
}
