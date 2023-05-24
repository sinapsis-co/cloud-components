import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { getDomain } from '@sinapsis-co/cc-core/common/naming/get-domain';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { CognitoAuthPoolPrefab } from '@sinapsis-co/cc-core/prefab/auth/cognito-pool';
import { ApiAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/api-function/api-aggregate';
import { CognitoAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/cognito-function/cognito-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/event-function/event-aggregate';
import { PrivateBucketPrefab } from '@sinapsis-co/cc-core/prefab/storage/bucket/private-bucket';
import { SesDomain } from '@sinapsis-co/cc-core/prefab/util/ses/ses-domain';
import { Duration } from 'aws-cdk-lib';
import { UserPoolOperation } from 'aws-cdk-lib/aws-cognito';

import { GlobalCoordinator } from '@sinapsis-co/cc-services/config/config-type';
import { assetEvent } from '@sinapsis-co/cc-services/support/assets/catalog';
import { CdnApi } from '@sinapsis-co/cc-services/support/cdn-api';
import { DnsSubdomainCertificate } from '@sinapsis-co/cc-services/support/dns-subdomain-certificate';
import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';
import { Notifications } from '@sinapsis-co/cc-services/support/notifications';

import { identityApi, identityEvent } from './catalog';
import { buildCustomAttributes } from './platform/cognito-builder';
import { IdentityStoreTable } from './store/table-identity';

/**
 * Name of the user pool
 *
 * @default - automatically generated name by CloudFormation at deploy time
 */

class Dep extends ServiceDependencies {
  @DepCheck()
  notifications: Notifications;
  @DepCheck()
  globalEventBus: GlobalEventBus;
  @DepCheck()
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  @DepCheck()
  cdnApi: CdnApi;
}

export class Identity extends Service<GlobalCoordinator> {
  public authPool: CognitoAuthPoolPrefab;
  public cognitoAggregate: CognitoAggregate;
  public apiAggregate: ApiAggregate;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Identity.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    this.authPool = new CognitoAuthPoolPrefab(this, {
      callbackUrl: getDomain(this.props.subdomain.spaWebapp, this.props, true),
      userPool: { customAttributes: buildCustomAttributes() },
      emailConfiguration: SesDomain.getCognitoRef(this.props),
    });

    this.apiAggregate = new ApiAggregate(this, {
      baseFunctionFolder: __dirname,
      basePath: 'identity',
      cdnApiPrefab: dep.cdnApi.cdnApiPrefab,
      authPool: this.authPool,
      eventBus: dep.globalEventBus.eventBusPrefab,
      tableBuilder: IdentityStoreTable,
      handlers: {
        inviteCreate: {
          ...identityApi.inviteCreate.definition,
          environment: {
            PROJECT_NAME: this.props.projectName,
            WEBAPP_URL: getDomain(this.props.subdomain.spaWebapp, this.props),
            MEDIA_URL: getDomain(this.props.subdomain.assets, this.props),
          },
        },
        inviteResend: {
          ...identityApi.inviteResend.definition,
          environment: {
            PROJECT_NAME: this.props.projectName,
            WEBAPP_URL: getDomain(this.props.subdomain.spaWebapp, this.props),
            MEDIA_URL: getDomain(this.props.subdomain.assets, this.props),
          },
        },
        inviteDelete: identityApi.inviteDelete.definition,
        memberList: {
          ...identityApi.memberList.definition,
          environment: {
            MEDIA_URL: getDomain(this.props.subdomain.assets, this.props, true),
          },
        },
        memberRoleUpdate: {
          ...identityApi.memberUpdateRole.definition,
          modifiers: [this.authPool.useMod([CognitoAuthPoolPrefab.modifier.updateUserAtt])],
        },
        memberDelete: {
          ...identityApi.memberDelete.definition,
          modifiers: [this.authPool.useMod([CognitoAuthPoolPrefab.modifier.deleteUser])],
        },
        userGet: {
          ...identityApi.userGet.definition,
          environment: {
            MEDIA_URL: getDomain(this.props.subdomain.assets, this.props, true),
          },
        },
        userUpdate: {
          ...identityApi.userUpdate.definition,
          modifiers: [this.authPool.useMod([CognitoAuthPoolPrefab.modifier.updateUserAtt])],
        },
        tenantDelete: identityApi.tenantDelete.definition,
      },
    });

    this.cognitoAggregate = new CognitoAggregate(this, {
      baseFunctionFolder: __dirname,
      userPool: this.authPool.userPool,
      eventBus: dep.globalEventBus.eventBusPrefab,
      tablePrefab: this.apiAggregate.tablePrefab,
      handlers: {
        customMessage: {
          name: 'cognito-custom-message',
          operation: UserPoolOperation.CUSTOM_MESSAGE,
          environment: {
            PROJECT_NAME: this.props.projectName,
            WEBAPP_URL: getDomain(this.props.subdomain.spaWebapp, this.props),
            MEDIA_URL: getDomain(this.props.subdomain.assets, this.props),
          },
          tablePermission: 'none',
          modifiers: [
            dep.notifications.templatesBucket.useMod('TEMPLATES_BUCKET', [PrivateBucketPrefab.modifier.reader]),
          ],
        },
        postConfirmation: {
          name: 'cognito-post-confirmation',
          operation: UserPoolOperation.POST_CONFIRMATION,
          environment: {
            PROJECT_NAME: this.props.projectName,
            WEBAPP_URL: getDomain(this.props.subdomain.spaWebapp, this.props),
            MEDIA_URL: getDomain(this.props.subdomain.assets, this.props),
          },
          tablePermission: 'write',
          modifiers: [CognitoAuthPoolPrefab.modifier.updateUserAtt()],
          timeout: Duration.seconds(5),
        },
      },
    });

    new EventAggregate(this, {
      baseFunctionFolder: __dirname,
      eventBus: dep.globalEventBus.eventBusPrefab,
      tablePrefab: this.apiAggregate.tablePrefab,
      handlers: {
        eventNotificationDispatch: {
          name: 'event-asset-updated',
          eventConfig: [{ ...assetEvent.assetUploaded.eventConfig, detail: { assetType: ['avatar'] } }],
          tablePermission: 'write',
        },
        eventTenantDeleted: {
          name: 'event-tenant-deleted',
          eventConfig: [identityEvent.tenantDeleted.eventConfig],
          tablePermission: 'read',
        },
        eventInviteDeleted: {
          name: 'event-invite-deleted',
          eventConfig: [identityEvent.inviteDeleted.eventConfig],
          tablePermission: 'write',
        },
        eventMemberDisabled: {
          name: 'event-member-disabled',
          eventConfig: [identityEvent.memberDisabled.eventConfig],
          tablePermission: 'read',
          modifiers: [this.authPool.useMod([CognitoAuthPoolPrefab.modifier.updateUserAtt])],
        },
      },
    });
  }
}
