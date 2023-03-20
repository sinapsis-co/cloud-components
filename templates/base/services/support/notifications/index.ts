import { Coordinator } from '@sinapsis-co/cc-infra/common/coordinator';
import { Service } from '@sinapsis-co/cc-infra/common/service';
import { EventAggregate } from '@sinapsis-co/cc-infra/prefab/compute/function/event-function/event-aggregate';
import { QueueFunction } from '@sinapsis-co/cc-infra/prefab/compute/function/queue-function';
import { AssetBucketPrefab } from '@sinapsis-co/cc-infra/prefab/storage/bucket/asset-bucket';
import { PrivateBucketPrefab } from '@sinapsis-co/cc-infra/prefab/storage/bucket/private-bucket';
import { SesDomain } from '@sinapsis-co/cc-infra/prefab/util/ses/ses-domain';

import { DnsDomainRef } from 'services/support/dns-domain-ref';
import { DnsSubdomainHostedZone } from 'services/support/dns-subdomain-hosted-zone';
import { GlobalEventBus } from 'services/support/global-event-bus';
import { notificationEvent } from './catalog';

type Deps = {
  globalEventBus: GlobalEventBus;
  dnsSubdomainHostedZone: DnsSubdomainHostedZone;
  dnsDomainRef: DnsDomainRef;
};
const depsNames: Array<keyof Deps> = ['globalEventBus', 'dnsSubdomainHostedZone', 'dnsDomainRef'];
export class Notifications extends Service<Coordinator> {
  public templatesBucket: PrivateBucketPrefab;
  public attachmentsBucket: PrivateBucketPrefab;
  public sendEmailQueueFn: QueueFunction;
  public ses: SesDomain;

  constructor(coordinator: Coordinator) {
    super(coordinator, Notifications.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
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
          modifiers: [this.sendEmailQueueFn.customQueue.useModWriter('EMAIL_QUEUE_URL')],
        },
      },
    });
  }
}
