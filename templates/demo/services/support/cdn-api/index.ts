import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { CdnApiConstruct } from '@sinapsis-co/cc-infra/services/cdn-api';
import { BehaviorOptions, Distribution } from 'aws-cdk-lib/aws-cloudfront';

import { GlobalProps } from '../../../config/config-type';
import { DnsSubdomainCertificate } from '../dns-subdomain-certificate';

export type CdnApiParams = {
  certificateService: DnsSubdomainCertificate;
};

export class CdnApi extends Service<GlobalProps, CdnApiParams> {
  public readonly domain: string;
  public readonly baseUrl: string;
  public readonly distribution: Distribution;
  public readonly behaviorOptions: Omit<BehaviorOptions, 'origin'>;

  constructor(scope: Construct, globalProps: GlobalProps, params: CdnApiParams) {
    super(scope, CdnApi.name, globalProps, { params });

    const cdnApiRest = new CdnApiConstruct(this, {
      subDomain: this.props.subdomain.api,
      certificate: this.props.certificateService.certificate,
    });

    this.domain = cdnApiRest.domain;
    this.baseUrl = cdnApiRest.baseUrl;
    this.distribution = cdnApiRest.distribution;
    this.behaviorOptions = cdnApiRest.behaviorOptions;
  }
}
