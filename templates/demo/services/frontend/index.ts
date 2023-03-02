import { Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { GlobalProps } from '../../config/config-type';

// Services
import { SpaWebapp } from './spa-webapp';

// External Services
import { DnsSubdomainCertificate } from 'services/support/dns-subdomain-certificate';
import { GlobalServiceDependencies } from '../business/index';
import { SpaLanding } from './spa-landing';

export type FrontendGlobalServiceDeps = GlobalServiceDependencies & {
  dnsSubdomainCertificate: DnsSubdomainCertificate;
};
export class FrontendServices {
  public readonly spaWebapp: SpaWebapp;
  public readonly spaLanding: SpaLanding;

  constructor(scope: Construct, globalProps: GlobalProps, dependencies: FrontendGlobalServiceDeps) {
    this.spaWebapp = new SpaWebapp(scope, globalProps, dependencies);
    this.spaLanding = new SpaLanding(scope, globalProps, dependencies);
  }
}
