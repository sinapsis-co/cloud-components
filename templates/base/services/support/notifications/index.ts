import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { SesDomain } from '@sinapsis-co/cc-infra-v2/prefab/ses/ses-domain';
import { SesEmailAddress } from '@sinapsis-co/cc-infra-v2/prefab/ses/ses-email-address';
import { AssetBucket } from '@sinapsis-co/cc-infra-v2/prefab/bucket/asset-bucket';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { QueueFunction } from '@sinapsis-co/cc-infra-v2/prefab/function/queue-function';
import { PrivateBucket } from '@sinapsis-co/cc-infra-v2/prefab/bucket/private-bucket';

import { GlobalProps } from '../../../config/config-type';
import { CustomEventBus } from 'services/support/custom-event-bus';
import { DnsSubdomainHostedZone } from 'services/support/dns-subdomain-hosted-zone';
import { DnsBaseDomainRef } from 'services/support/dns-base-domain-ref';
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
