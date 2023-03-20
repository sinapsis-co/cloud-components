import { Construct } from '@sinapsis-co/cc-infra/common/service';
import { GlobalProps } from '../../config/config-type';

import { CdnApi } from './cdn-api';
import { DeployPipeline } from './deploy-pipeline';
import { DnsBaseDomainRef } from './dns-base-domain-ref';
import { DnsSubdomainCertificate } from './dns-subdomain-certificate';
import { DnsSubdomainHostedZone } from './dns-subdomain-hosted-zone';
import { EnvAlb } from './env-alb';
import { EnvVpc } from './env-vpc';

export class SupportServices {
  public readonly deployPipeline: DeployPipeline;
  public readonly dnsSubdomainHostedZone: DnsSubdomainHostedZone;
  public readonly dnsBaseDomainRef: DnsBaseDomainRef;
  public readonly dnsSubdomainCertificate: DnsSubdomainCertificate;
  public readonly cdnApi: CdnApi;
  public readonly envVpc: EnvVpc;
  public readonly envAlb: EnvAlb;

  constructor(scope: Construct, globalProps: GlobalProps) {
    this.deployPipeline = new DeployPipeline(scope, globalProps);
    this.dnsSubdomainHostedZone = new DnsSubdomainHostedZone(scope, globalProps);
    this.dnsBaseDomainRef = new DnsBaseDomainRef(scope, globalProps, {
      dnsSubdomainHostedZone: this.dnsSubdomainHostedZone,
    });
    this.dnsSubdomainCertificate = new DnsSubdomainCertificate(scope, globalProps, {
      dnsSubdomainHostedZone: this.dnsSubdomainHostedZone,
      dnsBaseDomainRef: this.dnsBaseDomainRef,
    });

    this.envVpc = new EnvVpc(scope, globalProps, {});
    this.envAlb = new EnvAlb(scope, globalProps, {
      certificateService: this.dnsSubdomainCertificate,
      cdnApi: this.cdnApi,
      vpcService: this.envVpc.vpcConstruct,
    });
    this.cdnApi = new CdnApi(scope, globalProps, {
      certificateService: this.dnsSubdomainCertificate,
      albDefaultBehavior: this.envAlb.albConstruct,
    });
  }
}
