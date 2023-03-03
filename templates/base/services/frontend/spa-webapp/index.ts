import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';

import { SpaPrefab } from '@sinapsis-co/cc-infra-v2/prefab/gateway/service/spa';
import { FrontendGlobalServiceDeps } from '..';
import { GlobalProps } from '../../../config/config-type';

export type WebappServiceDeps = FrontendGlobalServiceDeps;

export class SpaWebapp extends Service<GlobalProps, WebappServiceDeps> {
  constructor(scope: Construct, globalProps: GlobalProps, params: WebappServiceDeps) {
    super(scope, SpaWebapp.name, globalProps, { params });

    new SpaPrefab(this, {
      subDomain: this.props.subdomain.spaWebapp,
      baseDir: 'frontend/spa-webapp',
      certificate: this.props.dnsSubdomainCertificate.certificatePrefab.certificate,
      envVars: {
        calculatedSecrets: {
          SKIP_PREFLIGHT_CHECK: 'true',
          VITE_APP_API_URL: params.cdnApi.cdnApiPrefab.baseUrl,
          ...params.identity.authPool.frontendRefs,
        },
      },
    });
  }
}
