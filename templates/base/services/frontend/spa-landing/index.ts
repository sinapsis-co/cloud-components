import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';

import { WebappConstruct } from '@sinapsis-co/cc-infra-v2/services/webapp';
import { FrontendGlobalServiceDeps } from '..';
import { GlobalProps } from '../../../config/config-type';

export type WebappServiceDeps = FrontendGlobalServiceDeps;

export class SpaLanding extends Service<GlobalProps, WebappServiceDeps> {
  constructor(scope: Construct, globalProps: GlobalProps, params: WebappServiceDeps) {
    super(scope, SpaLanding.name, globalProps, { params });

    // This is an exact copy of Webapp but without auth injection in order to be used as LandingPage

    // Because we're using the landing subdomain to deploy the SsrLanding service, this service won't
    // deploy, so is not possible to test in runtime

    // Dependency due domain in identity verification
    params.identity.addDependency(this);

    new WebappConstruct(this, {
      subDomain: this.props.subdomain.webapp,
      baseDir: 'frontend/webapp',
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
