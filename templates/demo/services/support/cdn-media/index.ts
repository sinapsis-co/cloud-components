import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { Distribution, BehaviorOptions } from 'aws-cdk-lib/aws-cloudfront';
import { CdnAssetConstruct } from '@sinapsis-co/cc-infra-v2/services/cdn-asset';
import { PrivateBucket } from '@sinapsis-co/cc-infra-v2/prefab/bucket/private-bucket';

import { GlobalProps } from '../../../config/config-type';
import { DnsSubdomainCertificate } from '../dns-subdomain-certificate';

export type CdnMediaParams = {
  certificateService: DnsSubdomainCertificate;
};

export class CdnMedia extends Service<GlobalProps, CdnMediaParams> {
  public readonly domain: string;
  public readonly baseUrl: string;
  public readonly distribution: Distribution;
  public readonly bucket: PrivateBucket;
  public readonly behaviorOptions: Omit<BehaviorOptions, 'origin'>;

  constructor(scope: Construct, globalProps: GlobalProps, params: CdnMediaParams) {
    super(scope, CdnMedia.name, globalProps, { params });

    const cdnAssetConstruct = new CdnAssetConstruct(this, {
      subDomain: this.props.subdomain.media,
      certificate: this.props.certificateService.certificate,
      recordForRootPath: false,
      assetBucketProps: {
        bucketName: 'bucket',
        folder: './notifications/assets',
        prefix: 'assets',
      },
    });

    this.bucket = cdnAssetConstruct.bucket;
    this.domain = cdnAssetConstruct.domain;
    this.baseUrl = cdnAssetConstruct.baseUrl;
    this.distribution = cdnAssetConstruct.distribution;
    this.behaviorOptions = cdnAssetConstruct.behaviorOptions;
  }
}
