import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { EventAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/event-function/event-aggregate';
import { QueueFunction } from '@sinapsis-co/cc-core/prefab/compute/function/queue-function';
import { AssetBucketPrefab } from '@sinapsis-co/cc-core/prefab/storage/bucket/asset-bucket';
import { PrivateBucketPrefab } from '@sinapsis-co/cc-core/prefab/storage/bucket/private-bucket';
import { SesDomain } from '@sinapsis-co/cc-core/prefab/util/ses/ses-domain';

import { GlobalCoordinator } from '@sinapsis-co/cc-services/config/config-type';

import { DnsDomainRef } from '../dns-domain-ref';
import { DnsSubdomainHostedZone } from '../dns-subdomain-hosted-zone';
import { GlobalEventBus } from '../global-event-bus';
import { notificationEvent } from './catalog';

class Deps extends ServiceDependencies {
  @DepCheck() globalEventBus: GlobalEventBus;
  @DepCheck() dnsSubdomainHostedZone: DnsSubdomainHostedZone;
  @DepCheck() dnsDomainRef: DnsDomainRef;
}
export class Notifications extends Service<GlobalCoordinator> {
  public templatesBucket: PrivateBucketPrefab;
  public attachmentsBucket: PrivateBucketPrefab;
  public sendEmailQueueFn: QueueFunction;
  public ses: SesDomain;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Notifications.name, Deps);
    coordinator.addService(this);
  }

  build(deps: Deps): void {
    this.addDependency(deps.dnsSubdomainHostedZone);
    this.addDependency(deps.dnsDomainRef);

    this.ses = new SesDomain(this);

    this.templatesBucket = new AssetBucketPrefab(this, {
      bucketName: 'templates',
      folder: './notifications/templates',
    });
    this.attachmentsBucket = new PrivateBucketPrefab(this, { bucketName: 'attachments' });

    this.sendEmailQueueFn = new QueueFunction(this, {
      baseFunctionFolder: __dirname,
      name: 'process-send-email',
      environment: { EMAIL_FROM: this.props.emailSender },
      modifiers: [
        this.templatesBucket.useMod('TEMPLATES_BUCKET', [PrivateBucketPrefab.modifier.reader]),
        this.attachmentsBucket.useMod('ATTACHMENT_BUCKET', [PrivateBucketPrefab.modifier.reader]),
        this.ses.useMod([SesDomain.modifier.emailSender]),
      ],
    });

    new EventAggregate(this, {
      baseFunctionFolder: __dirname,
      eventBus: deps.globalEventBus.eventBusPrefab,
      handlers: {
        eventNotificationDispatch: {
          name: 'event-notification-dispatch',
          eventConfig: [notificationEvent.dispatch.eventConfig],
          modifiers: [this.sendEmailQueueFn.queuePrefab.useModWriter('EMAIL_QUEUE_URL')],
        },
      },
    });
  }
}
