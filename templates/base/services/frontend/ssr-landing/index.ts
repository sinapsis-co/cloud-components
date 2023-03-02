import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';

import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { SsrConstruct } from '@sinapsis-co/cc-infra-v2/services/ssr';
import { GlobalProps } from '../../../config/config-type';

import { PrivateBucket } from '@sinapsis-co/cc-infra-v2/prefab/bucket/private-bucket';
import { QueueFunction } from '@sinapsis-co/cc-infra-v2/prefab/function/queue-function';
import { GlobalServiceDependencies } from '../../business';
import { baseRepo } from '../../business/base-crud/repository/base';
import { otherRepo } from '../../business/base-event/repository/other';
import { ssrLandingEvent } from './catalog';

export type WebappNextServiceDeps = GlobalServiceDependencies;

export class SsrLanding extends Service<GlobalProps, WebappNextServiceDeps> {
  public readonly ssr: SsrConstruct;
  public readonly eventAggregate: EventAggregate;
  public readonly queueFunction: QueueFunction;

  constructor(scope: Construct, globalProps: GlobalProps, params: WebappNextServiceDeps) {
    super(scope, SsrLanding.name, globalProps, { params });

    // Dependency due domain in identity verification
    params.identity.addDependency(this);

    this.ssr = new SsrConstruct(this, {
      subDomain: this.props.subdomain.ssrLanding,
      baseDir: 'frontend/ssr-landing',
      distDir: '.next',
      deployTriggeredEventConfig: {
        ...ssrLandingEvent.renderGenerator.eventConfig,
        bus: params.customEventBus.bus.eventBusArn,
      },
      certificate: this.props.dnsSubdomainCertificate.certificate,
      wwwRedirectEnabled: true,
      envVars: {
        calculatedSecrets: {
          SKIP_PREFLIGHT_CHECK: 'true',
          REACT_APP_API_URL: params.cdnApi.baseUrl,
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
        this.ssr.distributionBucket.useMod('DISTRO_BUCKET_NAME', [PrivateBucket.modifier.writer]),
        this.ssr.recipeBucket.useMod('RECIPE_BUCKET_NAME', [PrivateBucket.modifier.reader]),
      ],
    });

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
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
            this.ssr.distributionBucket.useMod('DISTRO_BUCKET_NAME', [PrivateBucket.modifier.reader]),
            this.queueFunction.customQueue.useModWriter(),
          ],
        },
      },
    });
  }
}