import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { CdnApiPrefab } from '@sinapsis-co/cc-infra-v2/prefab/gateway/global/cdn-api';

import { GlobalProps } from '../../../config/config-type';
import { DnsSubdomainCertificate } from '../dns-subdomain-certificate';

export type CdnApiParams = {
  dnsSubdomainCertificate: DnsSubdomainCertificate;
};

export class CdnApi extends Service<GlobalProps, CdnApiParams> {
  public readonly cdnApiPrefab: CdnApiPrefab;

  constructor(scope: Construct, globalProps: GlobalProps, params: CdnApiParams) {
    super(scope, CdnApi.name, globalProps, { params });

    this.cdnApiPrefab = new CdnApiPrefab(this, {
      subDomain: this.props.subdomain.api,
      certificate: this.props.dnsSubdomainCertificate.certificatePrefab.certificate,
    });
  }
}
