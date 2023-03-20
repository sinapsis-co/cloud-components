import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';

import { WebappConstruct } from '@sinapsis-co/cc-infra/services/webapp';
import { FrontendGlobalServiceDeps } from '..';
import { GlobalProps } from '../../../config/config-type';

export type WebappServiceDeps = FrontendGlobalServiceDeps;

export class SpaLanding extends Service<GlobalProps, WebappServiceDeps> {
  constructor(scope: Construct, globalProps: GlobalProps, params: WebappServiceDeps) {
    super(scope, SpaLanding.name, globalProps, { params });

    params.identity.addDependency(this);

    // TEMPORALLY POINTING TO SPA-spaWebapp UNTIL WE BUILD A BASE LANDING
    new WebappConstruct(this, {
      subDomain: this.props.subdomain.spaLanding,
      baseDir: 'frontend/spa-webapp',
      certificate: this.props.dnsSubdomainCertificate.certificate,
      envVars: {
        calculatedSecrets: {
          SKIP_PREFLIGHT_CHECK: 'true',
          REACT_APP_API_URL: params.cdnApi.baseUrl,
        },
      },
    });
  }
}
