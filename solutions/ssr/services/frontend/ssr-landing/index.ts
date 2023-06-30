import { Service } from '@sinapsis-co/cc-core/common/service';
import { SsrPrefab } from '@sinapsis-co/cc-core/prefab/frontend/ssr';

import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { CdnApi } from '@sinapsis-co/cc-services/support/cdn-api';
import { DnsSubdomainCertificate } from '@sinapsis-co/cc-services/support/dns-subdomain-certificate';

import { GlobalCoordinator } from 'config/config-type';
import path from 'path';

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
      filesPathAssets: path.join(__dirname, '../../../frontend/webpage/.open-next/assets'),
      filesPathImageFunction: path.join(__dirname, '../../../frontend/webpage/.open-next/image-optimization-function'),
      filesPathMiddlewareFunction: path.join(__dirname, '../../../frontend/webpage/.open-next/middleware-function'),
      filesPathNextFunction: path.join(__dirname, '../../../frontend/webpage/.open-next/server-function'),
      calculatedSecrets: {
        SKIP_PREFLIGHT_CHECK: 'true',
        REACT_APP_API_URL: dep.cdnApi.cdnApiPrefab.baseUrl,
      },
    });
  }
}
