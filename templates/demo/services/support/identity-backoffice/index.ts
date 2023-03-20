import { getDomain } from '@sinapsis-co/cc-infra/common/naming/get-domain';
import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { AuthPool } from '@sinapsis-co/cc-infra/prefab/auth-pool';
import { PrivateBucket } from '@sinapsis-co/cc-infra/prefab/bucket/private-bucket';
import { ApiAggregate } from '@sinapsis-co/cc-infra/prefab/function/api-function/api-aggregate';
import { CognitoAggregate } from '@sinapsis-co/cc-infra/prefab/function/cognito-function/cognito-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra/prefab/function/event-function/event-aggregate';
import { SesEmailAddress } from '@sinapsis-co/cc-infra/prefab/ses/ses-email-address';
import { Duration } from 'aws-cdk-lib';
import { UserPoolOperation } from 'aws-cdk-lib/aws-cognito';

import { CdnApi } from 'services/support/cdn-api';
import { CdnMedia } from 'services/support/cdn-media';
import { CustomEventBus } from 'services/support/custom-event-bus';
import { DnsSubdomainCertificate } from 'services/support/dns-subdomain-certificate';
import { Notifications } from 'services/support/notifications';
import { GlobalProps } from '../../../config/config-type';
import { assetEvent } from '../../business/assets/catalog';
import { identityApi } from './catalog';
import { buildCustomAttributes } from './platform/cognito-mapper';

export type IdentityOfficeParams = {
  notifications: Notifications;
  customEventBus: CustomEventBus;
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  cdnApi: CdnApi;
  cdnMedia: CdnMedia;
};

export class IdentityBackoffice extends Service<GlobalProps, IdentityOfficeParams> {
  public readonly authPool: AuthPool;
  public readonly cognitoAggregate: CognitoAggregate;
  public readonly apiAggregate: ApiAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: IdentityOfficeParams) {
    super(scope, IdentityBackoffice.name, globalProps, { params });

    this.addDependency(params.cdnMedia);
    this.addDependency(params.notifications);

    this.authPool = new AuthPool(this, {
      callbackUrl: getDomain(this.props.subdomain.spaWebapp, this.props, true),
      userPool: { customAttributes: buildCustomAttributes() },
      emailConfiguration: SesEmailAddress.getCognitoRef(this.props),
      // userPoolDomain: {
      //   customDomain: {
      //     domainName: getDomain(this.props.subdomain.backofficeAuth, this.props),
      //     certificate: params.dnsSubdomainCertificate.certificate,
      //   },
      // },
    });

    this.apiAggregate = new ApiAggregate(this, {
      baseFunctionFolder: __dirname,
      basePath: 'identity-backoffice',
      cdnApi: this.props.cdnApi,
      authPool: this.authPool,
      eventBus: this.props.customEventBus.bus,
      autoEventsEnabled: true,
      handlers: {
        profileGet: {
          ...identityApi.profileGet.config,
          environment: {
            MEDIA_URL: getDomain(this.props.subdomain.media, this.props, true),
          },
        },
        profileUpdate: {
          ...identityApi.profileUpdate.config,
          modifiers: [this.authPool.useMod([AuthPool.modifier.updateUserAtt])],
        },
        profileDelete: {
          ...identityApi.profileDelete.config,
          modifiers: [this.authPool.useMod([AuthPool.modifier.deleteUser])],
        },
      },
    });
    this.apiAggregate.handlers;

    this.cognitoAggregate = new CognitoAggregate(this, {
      baseFunctionFolder: __dirname,
      userPool: this.authPool.userPool,
      eventBus: this.props.customEventBus.bus,
      table: this.apiAggregate.table,
      handlers: {
        customMessage: {
          name: 'cognito-custom-message',
          operation: UserPoolOperation.CUSTOM_MESSAGE,
          environment: {
            PROJECT_NAME: this.props.projectName,
            WEBAPP_URL: getDomain(this.props.subdomain.spaWebapp, this.props),
            MEDIA_URL: getDomain(this.props.subdomain.media, this.props),
          },
          tablePermission: 'none',
          modifiers: [
            this.props.notifications.templatesBucket.useMod('TEMPLATES_BUCKET', [PrivateBucket.modifier.reader]),
          ],
        },
        postConfirmation: {
          name: 'cognito-post-confirmation',
          operation: UserPoolOperation.POST_CONFIRMATION,
          environment: {
            PROJECT_NAME: this.props.projectName,
            WEBAPP_URL: getDomain(this.props.subdomain.spaWebapp, this.props),
            MEDIA_URL: getDomain(this.props.subdomain.media, this.props),
          },
          tablePermission: 'write',
          modifiers: [AuthPool.modifier.updateUserAtt()],
          timeout: Duration.seconds(15),
        },
      },
    });

    new EventAggregate(this, {
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      table: this.apiAggregate.table,
      handlers: {
        eventNotificationDispatch: {
          name: 'event-asset-updated',
          eventConfig: [{ ...assetEvent.assetUploaded.eventConfig, detail: { assetType: ['avatar'] } }],
          tablePermission: 'write',
        },
      },
    });
  }
}
