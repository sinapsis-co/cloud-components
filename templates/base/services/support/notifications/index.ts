import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/event-function/event-aggregate';
import { QueueFunction } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/queue-function';
import { AssetBucketPrefab } from '@sinapsis-co/cc-infra-v2/prefab/storage/bucket/asset-bucket';
import { PrivateBucketPrefab } from '@sinapsis-co/cc-infra-v2/prefab/storage/bucket/private-bucket';
import { SesDomain } from '@sinapsis-co/cc-infra-v2/prefab/util/ses/ses-domain';

import { DnsDomainRef } from 'services/support/dns-domain-ref';
import { DnsSubdomainHostedZone } from 'services/support/dns-subdomain-hosted-zone';
import { EventBus } from 'services/support/event-bus';
import { GlobalProps } from '../../../config/config-type';
import { notificationEvent } from './catalog';

export type NotificationsParams = {
  eventBus: EventBus;
  dnsSubdomainHostedZone: DnsSubdomainHostedZone;
  dnsDomainRef: DnsDomainRef;
};

export class Notifications extends Service<GlobalProps, NotificationsParams> {
  public readonly templatesBucket: PrivateBucketPrefab;
  public readonly attachmentsBucket: PrivateBucketPrefab;
  public readonly sendEmailQueueFn: QueueFunction;
  public readonly ses: SesDomain;

  constructor(scope: Construct, globalProps: GlobalProps, params: NotificationsParams) {
    super(scope, Notifications.name, globalProps, { params });

    this.addDependency(params.dnsSubdomainHostedZone);
    this.addDependency(params.dnsDomainRef);

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
      eventBus: this.props.eventBus.eventBusPrefab,
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
