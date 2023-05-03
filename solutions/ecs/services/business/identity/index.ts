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

import { DepCheck } from '@sinapsis-co/cc-core/common/coordinator';
import { CdnApi } from 'services/support/cdn-api';
import { DnsSubdomainCertificate } from 'services/support/dns-subdomain-certificate';
import { GlobalEventBus } from 'services/support/global-event-bus';
import { Notifications } from 'services/support/notifications';
import { GlobalCoordinator } from '../../../config/config-type';
import { assetEvent } from '../assets/catalog';
import { identityApi } from './catalog';
import { buildCustomAttributes } from './platform/cognito-builder';
import { identityTableBuilder } from './repository/table-identity';

/**
 * Name of the user pool
 *
 * @default - automatically generated name by CloudFormation at deploy time
 */

class Dep {
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
    this.addDependency(dep.notifications);
    this.addDependency(dep.notifications);

    this.authPool = new CognitoAuthPoolPrefab(this, {
      callbackUrl: getDomain(this.props.subdomain.spaWebapp, this.props, true),
      userPool: { customAttributes: buildCustomAttributes() },
      emailConfiguration: SesDomain.getCognitoRef(this.props),
      // userPoolDomain: {
      //   customDomain: {
      //     domainName: getDomain(this.props.subdomain.auth, this.props),
      //     certificate: deps.dnsSubdomainCertificate.certificatePrefab.certificate,
      //   },
      // },
    });

    this.apiAggregate = new ApiAggregate(this, {
      baseFunctionFolder: __dirname,
      basePath: 'identity',
      cdnApiPrefab: dep.cdnApi.cdnApiPrefab,
      authPool: this.authPool,
      eventBus: dep.globalEventBus.eventBusPrefab,
      tableBuilder: identityTableBuilder,
      handlers: {
        inviteCreate: {
          ...identityApi.inviteCreate.config,
          environment: {
            PROJECT_NAME: this.props.projectName,
            WEBAPP_URL: getDomain(this.props.subdomain.spaWebapp, this.props),
            MEDIA_URL: getDomain(this.props.subdomain.assets, this.props),
          },
        },
        inviteResend: {
          ...identityApi.inviteResend.config,
          environment: {
            PROJECT_NAME: this.props.projectName,
            WEBAPP_URL: getDomain(this.props.subdomain.spaWebapp, this.props),
            MEDIA_URL: getDomain(this.props.subdomain.assets, this.props),
          },
        },
        inviteDelete: identityApi.inviteDelete.config,
        memberList: {
          ...identityApi.memberList.config,
          environment: {
            MEDIA_URL: getDomain(this.props.subdomain.assets, this.props, true),
          },
        },
        memberRoleUpdate: {
          ...identityApi.memberUpdateRole.config,
          modifiers: [this.authPool.useMod([CognitoAuthPoolPrefab.modifier.updateUserAtt])],
        },
        memberDelete: {
          ...identityApi.memberDelete.config,
          modifiers: [this.authPool.useMod([CognitoAuthPoolPrefab.modifier.deleteUser])],
        },
        userGet: {
          ...identityApi.userGet.config,
          environment: {
            MEDIA_URL: getDomain(this.props.subdomain.assets, this.props, true),
          },
        },
        userUpdate: {
          ...identityApi.userUpdate.config,
          modifiers: [this.authPool.useMod([CognitoAuthPoolPrefab.modifier.updateUserAtt])],
        },
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
      },
    });
  }
}
