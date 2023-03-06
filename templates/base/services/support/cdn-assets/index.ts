import { Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { CdnAssetPrefab } from '@sinapsis-co/cc-infra-v2/prefab/gateway/cdn-asset';
import { GlobalCoordinator } from '../../../config/config-type';

import { DnsSubdomainCertificate } from '../dns-subdomain-certificate';

type Deps = {
  dnsSubdomainCertificate: DnsSubdomainCertificate;
};
const depsNames: Array<keyof Deps> = ['dnsSubdomainCertificate'];

export class CdnAssets extends Service<GlobalCoordinator> {
  public cdnAssetPrefab: CdnAssetPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, CdnAssets.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    this.cdnAssetPrefab = new CdnAssetPrefab(this, {
      subDomain: this.props.subdomain.assets,
      certificate: deps.dnsSubdomainCertificate.certificatePrefab.certificate,
      recordForRootPath: false,
      assetBucketProps: {
        bucketName: 'bucket',
        folder: './notifications/assets',
        prefix: 'assets',
      },
    });
  }
}
