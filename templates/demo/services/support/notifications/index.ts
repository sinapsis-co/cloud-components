import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { AssetBucket } from '@sinapsis-co/cc-infra/prefab/bucket/asset-bucket';
import { PrivateBucket } from '@sinapsis-co/cc-infra/prefab/bucket/private-bucket';
import { EventAggregate } from '@sinapsis-co/cc-infra/prefab/function/event-function/event-aggregate';
import { QueueFunction } from '@sinapsis-co/cc-infra/prefab/function/queue-function';
import { SesDomain } from '@sinapsis-co/cc-infra/prefab/ses/ses-domain';
import { SesEmailAddress } from '@sinapsis-co/cc-infra/prefab/ses/ses-email-address';

import { CustomEventBus } from 'services/support/custom-event-bus';
import { DnsBaseDomainRef } from 'services/support/dns-base-domain-ref';
import { DnsSubdomainHostedZone } from 'services/support/dns-subdomain-hosted-zone';
import { GlobalProps } from '../../../config/config-type';
import { notificationEvent } from './catalog';

export type NotificationsParams = {
  customEventBus: CustomEventBus;
  dnsSubdomainHostedZone: DnsSubdomainHostedZone;
  dnsBaseDomainRef: DnsBaseDomainRef;
};

export class Notifications extends Service<GlobalProps, NotificationsParams> {
  public readonly templatesBucket: PrivateBucket;
  public readonly attachmentsBucket: PrivateBucket;
  public readonly sendEmailQueueFn: QueueFunction;
  public readonly ses: SesEmailAddress;

  constructor(scope: Construct, globalProps: GlobalProps, params: NotificationsParams) {
    super(scope, Notifications.name, globalProps, { params });

    this.addDependency(params.dnsSubdomainHostedZone);
    this.addDependency(params.dnsBaseDomainRef);

    new SesDomain(this);

    this.ses = new SesEmailAddress(this, { emailSender: this.props.emailSender });

    this.templatesBucket = new AssetBucket(this, {
      bucketName: 'templates',
      folder: './notifications/templates',
    });
    this.attachmentsBucket = new PrivateBucket(this, { bucketName: 'attachments' });

    this.sendEmailQueueFn = new QueueFunction(this, {
      baseFunctionFolder: __dirname,
      name: 'process-send-email',
      environment: { EMAIL_FROM: this.props.emailSender },
      modifiers: [
        this.templatesBucket.useMod('TEMPLATES_BUCKET', [PrivateBucket.modifier.reader]),
        this.attachmentsBucket.useMod('ATTACHMENT_BUCKET', [PrivateBucket.modifier.reader]),
        this.ses.useMod([SesEmailAddress.modifier.emailSender]),
      ],
    });

    new EventAggregate(this, {
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
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
