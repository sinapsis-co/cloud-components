import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { CdnAssetPrefab } from '@sinapsis-co/cc-infra-v2/prefab/gateway/global/cdn-asset';

import { GlobalProps } from '../../../config/config-type';
import { DnsSubdomainCertificate } from '../dns-subdomain-certificate';

export type CdnMediaParams = {
  dnsSubdomainCertificate: DnsSubdomainCertificate;
};

export class CdnAssets extends Service<GlobalProps, CdnMediaParams> {
  public readonly cdnAssetPrefab: CdnAssetPrefab;

  constructor(scope: Construct, globalProps: GlobalProps, params: CdnMediaParams) {
    super(scope, CdnAssets.name, globalProps, { params });

    this.cdnAssetPrefab = new CdnAssetPrefab(this, {
      subDomain: this.props.subdomain.assets,
      certificate: this.props.dnsSubdomainCertificate.certificatePrefab.certificate,
      recordForRootPath: false,
      assetBucketProps: {
        bucketName: 'bucket',
        folder: './notifications/assets',
        prefix: 'assets',
      },
    });
  }
}
