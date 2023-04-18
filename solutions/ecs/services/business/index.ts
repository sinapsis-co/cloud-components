import { Construct } from '@sinapsis-co/cc-core/common/service';
import { GlobalProps } from '../../config/config-type';

// Services

// External Services
import { DnsSubdomainCertificate } from 'services/support/dns-subdomain-certificate';
import { CdnApi } from '../support/cdn-api';
import { EnvAlb } from '../support/env-alb';
import { EnvVpc } from '../support/env-vpc';
import { ContainerService } from './base-container-one';
import { ContainerServiceTwo } from './base-container-two';
import { BaseCrud } from './base-crud';

export type GlobalServiceDependencies = {
  cdnApi: CdnApi;
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  envVpc: EnvVpc;
  envAlb: EnvAlb;
};

export class BusinessServices {
  public readonly containerService: ContainerService;
  public readonly containerServiceTwo: ContainerServiceTwo;
  public readonly baseCrud: BaseCrud;

  constructor(scope: Construct, globalProps: GlobalProps, dependencies: Omit<GlobalServiceDependencies, 'identity'>) {
    const globalDeps: GlobalServiceDependencies = { ...dependencies };

    this.containerService = new ContainerService(scope, globalProps, globalDeps);
    this.containerServiceTwo = new ContainerServiceTwo(scope, globalProps, globalDeps);
    this.baseCrud = new BaseCrud(scope, globalProps, globalDeps);
  }
}
