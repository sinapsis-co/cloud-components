import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { ApiCdnApiParams } from '@sinapsis-co/cc-infra/prefab/function/api-function/api-aggregate';
import { PublicAlbConstruct } from '@sinapsis-co/cc-infra/services/alb-public';
import { VpcConstruct } from '@sinapsis-co/cc-infra/services/vpc';

import { GlobalProps } from '../../../config/config-type';
import { DnsSubdomainCertificate } from '../dns-subdomain-certificate';

export type EnvAlbParams = {
  vpcService: VpcConstruct;
  certificateService: DnsSubdomainCertificate;
  cdnApi?: ApiCdnApiParams;
};

export class EnvAlb extends Service<GlobalProps, EnvAlbParams> {
  public readonly albConstruct: PublicAlbConstruct;

  constructor(scope: Construct, globalProps: GlobalProps, params: EnvAlbParams) {
    super(scope, EnvAlb.name, globalProps, { params });

    this.albConstruct = new PublicAlbConstruct(this, {
      name: 'global-alb',
      vpc: params.vpcService.vpc,
      certificate: params.certificateService.certificate,
    });
  }
}
