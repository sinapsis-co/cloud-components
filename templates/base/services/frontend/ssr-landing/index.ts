import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/event-function/event-aggregate';
import { QueueFunction } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/queue-function';
import { PrivateBucketPrefab } from '@sinapsis-co/cc-infra-v2/prefab/storage/bucket/private-bucket';

import { SsrPrefab } from '@sinapsis-co/cc-infra-v2/prefab/gateway/service/ssr';
import { GlobalProps } from '../../../config/config-type';

import { GlobalServiceDependencies } from '../../business';
import { baseRepo } from '../../business/base-crud/repository/base';
import { otherRepo } from '../../business/base-event/repository/other';
import { ssrLandingEvent } from './catalog';

export type WebappNextServiceDeps = GlobalServiceDependencies;

export class SsrLanding extends Service<GlobalProps, WebappNextServiceDeps> {
  public readonly ssr: SsrPrefab;
  public readonly eventAggregate: EventAggregate;
  public readonly queueFunction: QueueFunction;

  constructor(scope: Construct, globalProps: GlobalProps, params: WebappNextServiceDeps) {
    super(scope, SsrLanding.name, globalProps, { params });

    // Dependency due domain in identity verification
    params.identity.addDependency(this);

    this.ssr = new SsrPrefab(this, {
      subDomain: this.props.subdomain.ssrLanding,
      baseDir: 'frontend/ssr-landing',
      distDir: '.next',
      deployTriggeredEventConfig: {
        ...ssrLandingEvent.renderGenerator.eventConfig,
        bus: params.eventBus.eventBusPrefab.bus.eventBusArn,
      },
      certificate: this.props.dnsSubdomainCertificate.certificatePrefab.certificate,
      wwwRedirectEnabled: true,
      envVars: {
        calculatedSecrets: {
          SKIP_PREFLIGHT_CHECK: 'true',
          REACT_APP_API_URL: params.cdnApi.cdnApiPrefab.baseUrl,
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
      eventBus: this.props.eventBus.eventBusPrefab,
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
