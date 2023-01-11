import { Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { GlobalProps } from '../../config/config-type';

// Services
import { Webapp } from './webapp';
import { WebappVite } from './webapp-vite';
import { SsrLanding } from './ssr-landing';

// External Services
import { GlobalServiceDependencies } from '../business/index';
import { DnsSubdomainCertificate } from 'services/support/dns-subdomain-certificate';

export type FrontendGlobalServiceDeps = GlobalServiceDependencies & {
  dnsSubdomainCertificate: DnsSubdomainCertificate;
};
export class FrontendServices {
  public readonly webapp: Webapp;
  public readonly webappVite: WebappVite;
  public readonly ssrLanding: SsrLanding;

  constructor(scope: Construct, globalProps: GlobalProps, dependencies: FrontendGlobalServiceDeps) {
    this.webapp = new Webapp(scope, globalProps, dependencies);
    this.webappVite = new WebappVite(scope, globalProps, dependencies);
    this.ssrLanding = new SsrLanding(scope, globalProps, dependencies);
  }
}
