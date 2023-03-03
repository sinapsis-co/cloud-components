import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { CdnAssetPrefab } from '@sinapsis-co/cc-infra-v2/prefab/gateway/global/cdn-asset';
import { PrivateBucketPrefab } from '@sinapsis-co/cc-infra-v2/prefab/storage/bucket/private-bucket';
import { BehaviorOptions, Distribution } from 'aws-cdk-lib/aws-cloudfront';

import { GlobalProps } from '../../../config/config-type';
import { DnsSubdomainCertificate } from '../dns-subdomain-certificate';

export type CdnMediaParams = {
  certificateService: DnsSubdomainCertificate;
};

export class CdnAssets extends Service<GlobalProps, CdnMediaParams> {
  public readonly domain: string;
  public readonly baseUrl: string;
  public readonly distribution: Distribution;
  public readonly bucket: PrivateBucketPrefab;
  public readonly behaviorOptions: Omit<BehaviorOptions, 'origin'>;

  constructor(scope: Construct, globalProps: GlobalProps, params: CdnMediaParams) {
    super(scope, CdnAssets.name, globalProps, { params });

    const cdnAssetConstruct = new CdnAssetPrefab(this, {
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
