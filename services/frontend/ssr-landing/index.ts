import { Service } from '@sinapsis-co/cc-core/common/service';
import { EventAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/event-function/event-aggregate';
import { QueueFunction } from '@sinapsis-co/cc-core/prefab/compute/function/queue-function';
import { SsrPrefab } from '@sinapsis-co/cc-core/prefab/frontend/ssr';
import { PrivateBucketPrefab } from '@sinapsis-co/cc-core/prefab/storage/bucket/private-bucket';

import { Identity } from '@sinapsis-co/cc-services/business/identity/multi-tenant';
import { CdnApi } from '@sinapsis-co/cc-services/support/cdn-api';
import { DnsSubdomainCertificate } from '@sinapsis-co/cc-services/support/dns-subdomain-certificate';
import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';

import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { userRepository } from '@sinapsis-co/cc-services/business/identity/multi-tenant/repository/repo-user';
import { GlobalCoordinator } from 'solutions/rest/config/config-type';
import { ssrLandingEvent } from './catalog';

class Dep extends ServiceDependencies {
  @DepCheck()
  identity: Identity;
  @DepCheck()
  globalEventBus: GlobalEventBus;
  @DepCheck()
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  @DepCheck()
  cdnApi: CdnApi;
}

export class SsrLanding extends Service<GlobalCoordinator> {
  public ssr: SsrPrefab;
  public eventAggregate: EventAggregate;
  public queueFunction: QueueFunction;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, SsrLanding.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep) {
    // Dependency due domain in identity verification
    dep.identity.addDependency(this);

    this.ssr = new SsrPrefab(this, {
      subDomain: this.props.subdomain.ssrLanding,
      baseDir: 'frontend/ssr-landing',
      distDir: '.next',
      deployTriggeredEventConfig: {
        ...ssrLandingEvent.renderGenerator.eventConfig,
        bus: dep.globalEventBus.eventBusPrefab.bus.eventBusArn,
      },
      certificate: dep.dnsSubdomainCertificate.certificatePrefab.certificate,
      wwwRedirectEnabled: true,
      calculatedSecrets: {
        SKIP_PREFLIGHT_CHECK: 'true',
        REACT_APP_API_URL: dep.cdnApi.cdnApiPrefab.baseUrl,
      },
    });

    this.queueFunction = new QueueFunction(this, {
      name: 'process-render-generator',
      baseFunctionFolder: __dirname,
      customQueueParams: { name: 'render-generator' },
      memorySize: 512,
      environment: {
        ENV_NAME: this.props.envName,
      },
      modifiers: [
        this.ssr.distributionBucket.useMod('DISTRO_BUCKET_NAME', [PrivateBucketPrefab.modifier.writer]),
        this.ssr.recipeBucket.useMod('RECIPE_BUCKET_NAME', [PrivateBucketPrefab.modifier.reader]),
      ],
    });

    this.eventAggregate = new EventAggregate(this, {
      eventBus: dep.globalEventBus.eventBusPrefab,
      baseFunctionFolder: __dirname,
      handlers: {
        entityChanged: {
          name: 'event-entity-changed',
          eventConfig: [...Object.values(userRepository.events)],
          modifiers: [this.queueFunction.queuePrefab.useModWriter()],
        },
        deployTriggered: {
          name: 'event-deploy-triggered',
          eventConfig: [ssrLandingEvent.renderGenerator.eventConfig],
          modifiers: [
            this.ssr.distributionBucket.useMod('DISTRO_BUCKET_NAME', [PrivateBucketPrefab.modifier.reader]),
            this.queueFunction.queuePrefab.useModWriter(),
          ],
        },
      },
    });
  }
}
