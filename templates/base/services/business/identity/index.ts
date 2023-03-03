import { getDomain } from '@sinapsis-co/cc-infra-v2/common/naming/get-domain';
import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { AuthPool } from '@sinapsis-co/cc-infra-v2/prefab/auth-pool';
import { PrivateBucket } from '@sinapsis-co/cc-infra-v2/prefab/bucket/private-bucket';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { CognitoAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/cognito-function/cognito-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { SesEmailAddress } from '@sinapsis-co/cc-infra-v2/prefab/ses/ses-email-address';
import { Duration } from 'aws-cdk-lib';
import { UserPoolOperation } from 'aws-cdk-lib/aws-cognito';

import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { CdnApi } from 'services/support/cdn-api';
import { CdnAssets } from 'services/support/cdn-assets';
import { DnsSubdomainCertificate } from 'services/support/dns-subdomain-certificate';
import { EventBus } from 'services/support/event-bus';
import { Notifications } from 'services/support/notifications';
import { GlobalProps } from '../../../config/config-type';
import { assetEvent } from '../assets/catalog';
import { identityApi } from './catalog';
import { buildCustomAttributes } from './platform/cognito-mapper';

export type IdentityParams = {
  notifications: Notifications;
  customEventBus: EventBus;
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  cdnApi: CdnApi;
  cdnMedia: CdnAssets;
};

export class Identity extends Service<GlobalProps, IdentityParams> {
  public readonly authPool: AuthPool;
  public readonly cognitoAggregate: CognitoAggregate;
  public readonly apiAggregate: ApiAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: IdentityParams) {
    super(scope, Identity.name, globalProps, { params });

    this.addDependency(params.cdnMedia);
    this.addDependency(params.notifications);

    this.authPool = new AuthPool(this, {
      callbackUrl: getDomain(this.props.subdomain.spaWebapp, this.props, true),
      userPool: { customAttributes: buildCustomAttributes() },
      emailConfiguration: SesEmailAddress.getCognitoRef(this.props),
      userPoolDomain: {
        customDomain: {
          domainName: getDomain(this.props.subdomain.auth, this.props),
          certificate: params.dnsSubdomainCertificate.certificate,
        },
      },
    });

    this.apiAggregate = new ApiAggregate(this, {
      baseFunctionFolder: __dirname,
      basePath: 'identity',
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
        memberCreate: {
          ...identityApi.memberCreate.config,
          environment: {
            PROJECT_NAME: this.props.projectName,
            WEBAPP_URL: getDomain(this.props.subdomain.spaWebapp, this.props),
            MEDIA_URL: getDomain(this.props.subdomain.media, this.props),
          },
        },
        memberList: identityApi.memberList.config,
        memberRoleUpdate: {
          ...identityApi.memberUpdateRole.config,
          modifiers: [this.authPool.useMod([AuthPool.modifier.updateUserAtt])],
        },
        profileDelete: {
          ...identityApi.memberDelete.config,
          modifiers: [this.authPool.useMod([AuthPool.modifier.deleteUser])],
        },
      },
    });

    this.apiAggregate.table?.addGlobalSecondaryIndex({
      indexName: 'byEmail',
      partitionKey: { name: 'email', type: AttributeType.STRING },
    });

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
