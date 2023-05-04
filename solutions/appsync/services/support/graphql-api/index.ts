/* eslint-disable @typescript-eslint/ban-types */
import 'reflect-metadata';

import { Service } from '@sinapsis-co/cc-core/common/service';
import { AppSyncPrefab } from '@sinapsis-co/cc-core/prefab/gateway/app-sync';

import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { menuSchema } from 'services/business/menu/catalog';
import { DnsSubdomainCertificate } from 'services/support/dns-subdomain-certificate';
import { NonEmptyArray } from 'type-graphql';
import { GlobalCoordinator } from '../../../config/config-type';
import { GlobalEventBus } from '../global-event-bus';
import { schemaPath } from './schema-builder';

class Dep extends ServiceDependencies {
  @DepCheck()
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  @DepCheck()
  globalEventBus: GlobalEventBus;
  // cdnApi: CdnApi;
  // identity: Identity;
}

export const resolverSchemas: NonEmptyArray<Function> = [menuSchema.Ingredient.IngredientResolver];

export class GraphqlApi extends Service<GlobalCoordinator> {
  public appSyncPrefab: AppSyncPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, GraphqlApi.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    this.appSyncPrefab = new AppSyncPrefab(this, {
      name: 'graphql',
      consolidatedSchemaPath: schemaPath,
      eventBusPrefab: dep.globalEventBus.eventBusPrefab,
      domainConfig: {
        subdomain: this.props.subdomain.graphql,
        certificate: dep.dnsSubdomainCertificate.certificatePrefab.certificate,
      },
    });
  }
}
