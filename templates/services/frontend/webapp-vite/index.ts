import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';

import { WebappConstruct } from '@sinapsis-co/cc-infra-v2/services/webapp';
import { FrontendGlobalServiceDeps } from '..';
import { GlobalProps } from '../../../config/config-type';

export type WebappServiceDeps = FrontendGlobalServiceDeps;

export class WebappVite extends Service<GlobalProps, WebappServiceDeps> {
  constructor(scope: Construct, globalProps: GlobalProps, params: WebappServiceDeps) {
    super(scope, WebappVite.name, globalProps, { params });

    new WebappConstruct(this, {
      subDomain: this.props.subdomain.webappVite,
      baseDir: 'frontend/webapp',
      certificate: this.props.dnsSubdomainCertificate.certificate,
      envVars: {
        calculatedSecrets: {
          SKIP_PREFLIGHT_CHECK: 'true',
          VITE_APP_API_URL: params.cdnApi.baseUrl,
          ...params.identity.authPool.frontendRefs,
        },
      },
    });
  }
}