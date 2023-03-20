import { Service } from '@sinapsis-co/cc-infra/common/service';
import { EventAggregate } from '@sinapsis-co/cc-infra/prefab/compute/function/event-function/event-aggregate';
import { QueueFunction } from '@sinapsis-co/cc-infra/prefab/compute/function/queue-function';
import { SsrPrefab } from '@sinapsis-co/cc-infra/prefab/frontend/ssr';
import { PrivateBucketPrefab } from '@sinapsis-co/cc-infra/prefab/storage/bucket/private-bucket';

import { GlobalCoordinator } from '../../../config/config-type';
import { baseRepo } from '../../business/base-crud/repository/base';
import { otherRepo } from '../../business/base-event/repository/other';
import { Identity } from '../../business/identity';
import { CdnApi } from '../../support/cdn-api';
import { DnsSubdomainCertificate } from '../../support/dns-subdomain-certificate';
import { GlobalEventBus } from '../../support/global-event-bus';
import { ssrLandingEvent } from './catalog';

type Deps = {
  identity: Identity;
  globalEventBus: GlobalEventBus;
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  cdnApi: CdnApi;
};
const depsNames: Array<keyof Deps> = ['identity', 'globalEventBus', 'dnsSubdomainCertificate', 'cdnApi'];

export class SsrLanding extends Service<GlobalCoordinator> {
  public ssr: SsrPrefab;
  public eventAggregate: EventAggregate;
  public queueFunction: QueueFunction;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, SsrLanding.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    // Dependency due domain in identity verification
    deps.identity.addDependency(this);

    this.ssr = new SsrPrefab(this, {
      subDomain: this.props.subdomain.ssrLanding,
      baseDir: 'frontend/ssr-landing',
      distDir: '.next',
      deployTriggeredEventConfig: {
        ...ssrLandingEvent.renderGenerator.eventConfig,
        bus: deps.globalEventBus.eventBusPrefab.bus.eventBusArn,
      },
      certificate: deps.dnsSubdomainCertificate.certificatePrefab.certificate,
      wwwRedirectEnabled: true,
      envVars: {
        calculatedSecrets: {
          SKIP_PREFLIGHT_CHECK: 'true',
          REACT_APP_API_URL: deps.cdnApi.cdnApiPrefab.baseUrl,
        },
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
      eventBus: deps.globalEventBus.eventBusPrefab,
      baseFunctionFolder: __dirname,
      handlers: {
        entityChanged: {
          name: 'event-entity-changed',
          eventConfig: [...Object.values(baseRepo.events), ...Object.values(otherRepo.events)],
          modifiers: [this.queueFunction.customQueue.useModWriter()],
        },
        deployTriggered: {
          name: 'event-deploy-triggered',
          eventConfig: [ssrLandingEvent.renderGenerator.eventConfig],
          modifiers: [
            this.ssr.distributionBucket.useMod('DISTRO_BUCKET_NAME', [PrivateBucketPrefab.modifier.reader]),
            this.queueFunction.customQueue.useModWriter(),
          ],
        },
      },
    });
  }
}
