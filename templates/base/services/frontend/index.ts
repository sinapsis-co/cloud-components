import { Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { GlobalProps } from '../../config/config-type';

// Services
import { SpaWebapp } from './spa-webapp';
import { SsrLanding } from './ssr-landing';

// External Services
import { DnsSubdomainCertificate } from 'services/support/dns-subdomain-certificate';
import { GlobalServiceDependencies } from '../business/index';

export type FrontendGlobalServiceDeps = GlobalServiceDependencies & {
  dnsSubdomainCertificate: DnsSubdomainCertificate;
};
export class FrontendServices {
  public readonly spaWebapp: SpaWebapp;
  public readonly ssrLanding: SsrLanding;

  constructor(scope: Construct, globalProps: GlobalProps, dependencies: FrontendGlobalServiceDeps) {
    this.spaWebapp = new SpaWebapp(scope, globalProps, dependencies);
    this.ssrLanding = new SsrLanding(scope, globalProps, dependencies);
  }
}
