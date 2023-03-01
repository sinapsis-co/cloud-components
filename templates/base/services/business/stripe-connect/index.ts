import { getDomain } from '@sinapsis-co/cc-infra-v2/common/naming/get-domain';
import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra-v2/prefab/table/dynamo-table';
import { Duration } from 'aws-cdk-lib';
import {
  BehaviorOptions,
  CachePolicy,
  CacheQueryStringBehavior,
  OriginRequestPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { AttributeType, ProjectionType } from 'aws-cdk-lib/aws-dynamodb';
import { GlobalProps } from 'config/config-type';
import { GlobalServiceDependencies } from '..';
import { api } from './catalog';
import { account, accountExternal, capability } from './catalog/event';

export type StripeConnectParams = GlobalServiceDependencies;

export const BY_STRIPE_ACCOUNT_IDX_NAME = 'byAccountId';
export class StripeConnect extends Service<GlobalProps, StripeConnectParams> {
  public readonly eventAggregate: EventAggregate;
  public readonly apiAggregate: ApiAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: StripeConnectParams) {
    super(scope, StripeConnect.name, globalProps, { params });

    const behaviorOptions: Omit<BehaviorOptions, 'origin'> = {
      compress: this.props.cdnApi.behaviorOptions.compress,
      cachePolicy: new CachePolicy(this, 'CachePolicyStripe', {
        queryStringBehavior: CacheQueryStringBehavior.all(),
        headerBehavior: {
          behavior: 'whitelist',
          headers: ['Authorization', 'Stripe-Signature'],
        },
      }),
      originRequestPolicy: new OriginRequestPolicy(this, 'OriginRequestPolicyStripe', {
        headerBehavior: {
          behavior: 'whitelist',
          headers: [
            'Access-Control-Allow-Origin',
            'Access-Control-Request-Method',
            'Access-Control-Allow-Headers',
            'Access-Control-Request-Headers',
            'Origin',
            'Stripe-Signature',
          ],
        },
      }),
      allowedMethods: this.props.cdnApi.behaviorOptions.allowedMethods,
      viewerProtocolPolicy: this.props.cdnApi.behaviorOptions.viewerProtocolPolicy,
    };

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'connect',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: { ...this.props.cdnApi, behaviorOptions },
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      tableOptions: {
        withoutSortKey: true,
      },
      handlers: {
        webHookConnect: {
          ...api.webHookConnect.config,
          modifiers: [this.props.stripeService.SecretReader()],
        },
        createLinkAccount: {
          ...api.createLinkAccount.config,
          modifiers: [
            this.props.stripeService.SecretReader(),
            (fn) => ServiceTable.addTable(fn, this.props.identity.apiAggregate.table, 'read', 'USER_PROFILE_TABLE'),
          ],
          timeout: Duration.seconds(5),
          environment: {
            WEB_URL: getDomain(this.props.subdomain.webapp, this.props, true),
          },
        },
      },
    });

    this.apiAggregate?.table?.addGlobalSecondaryIndex({
      indexName: BY_STRIPE_ACCOUNT_IDX_NAME,
      projectionType: ProjectionType.ALL,
      partitionKey: {
        name: 'accountId',
        type: AttributeType.STRING,
      },
    });

    new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      autoEventsEnabled: true,
      handlers: {
        eventExternalAccount: {
          name: 'event-external-account',
          eventConfig: [
            accountExternal.createdExternal.eventConfig,
            accountExternal.updatedExternal.eventConfig,
            accountExternal.deletedExternal.eventConfig,
            capability.capabilityUpdated.eventConfig,
            account.accountUpdated.eventConfig,
          ],
          modifiers: [this.props.stripeService.SecretReader()],
          timeout: Duration.seconds(10),
          tablePermission: 'readWrite',
        },
      },
    });
  }
}
