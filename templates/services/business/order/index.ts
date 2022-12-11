import { getDomain } from '@sinapsis-co/cc-infra-v2/common/naming/get-domain';
import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { BaseFunction } from '@sinapsis-co/cc-infra-v2/prefab/function/base-function';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra-v2/prefab/table/dynamo-table';
import { Duration } from 'aws-cdk-lib';
import { AttributeType, ProjectionType } from 'aws-cdk-lib/aws-dynamodb';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { GlobalProps } from 'config/config-type';
import { PayoutSettingUser } from 'services/payout-setting-user';
import { GlobalServiceDependencies } from '..';
import { Messages } from '../message';
import { payoutFailed, payoutSuccess } from '../payout/catalog/event/payout';
import { reviewRepo } from '../rating-review/repository';
import { StripeCustomer } from '../stripe-customer';
import { UserSkillService } from '../user-skill';
import { api } from './catalog';
import { orderIncomePaid, orderProposalCreated } from './catalog/event/income';

export type OrderParams = {
  stripeCustomer: StripeCustomer;
  userSkillService: UserSkillService;
  payoutSettingUser: PayoutSettingUser;
  messages: Messages;
} & GlobalServiceDependencies;

export class Order extends Service<GlobalProps, OrderParams> {
  public readonly eventAggregate: EventAggregate;
  public readonly apiAggregate: ApiAggregate;
  public readonly internals: Record<string, NodejsFunction> = {};

  constructor(scope: Construct, globalProps: GlobalProps, params: OrderParams) {
    super(scope, Order.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'order',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        createOrderIncome: {
          ...api.createOrderIncome.config,
          environment: { MEDIA_URL: getDomain(this.props.subdomain.media, this.props, true) },
          modifiers: [
            this.props.stripeService.SecretReader(),
            (lambdaFunction) =>
              ServiceTable.addTable(lambdaFunction, this.props.stripeCustomer.table, 'readWrite', 'CUSTOMER_TABLE'),
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.userSkillService.apiAggregate.table,
                'readWrite',
                'USER_SKILL_TABLE'
              ),
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.identity.apiAggregate.table,
                'readWrite',
                'USER_PROFILE_TABLE'
              ),
          ],
          timeout: Duration.seconds(10),
        },
        createOrderWithdrawal: {
          ...api.createOrderWithdrawal.config,
          timeout: Duration.seconds(10),
          modifiers: [
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.payoutSettingUser.apiAggregate.table,
                'read',
                'SETTING_PAYOUT_USER_ACCOUNT'
              ),
          ],
        },
        updateItemOrderIncome: {
          ...api.updateItemOrderIncome.config,
          modifiers: [
            this.props.stripeService.SecretReader(),
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.userSkillService.apiAggregate.table,
                'readWrite',
                'USER_SKILL_TABLE'
              ),
          ],
          timeout: Duration.seconds(5),
        },
        getOrderSkillCount: {
          ...api.getOrderSkillCount.config,
        },
        getOrder: {
          ...api.getOrder.config,
        },
        listOrder: {
          ...api.listOrder.config,
        },
        getGraphOrder: {
          ...api.getGraphOrder.config,
        },
        listDashboardOrder: {
          ...api.listDashboardOrder.config,
        },
        createOrderProposalIncome: {
          ...api.createOrderProposalIncome.config,
          modifiers: [
            this.props.stripeService.SecretReader(),
            this.props.messages.SecretReader(),
            (lambdaFunction) =>
              ServiceTable.addTable(lambdaFunction, this.props.stripeCustomer.table, 'readWrite', 'CUSTOMER_TABLE'),
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.messages.apiAggregate.table,
                'readWrite',
                'MESSAGES_TABLE'
              ),
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.userSkillService.apiAggregate.table,
                'readWrite',
                'USER_SKILL_TABLE'
              ),
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.identity.apiAggregate.table,
                'readWrite',
                'USER_PROFILE_TABLE'
              ),
          ],
          timeout: Duration.seconds(10),
          environment: {
            MEDIA_URL: getDomain(this.props.subdomain.media, this.props, true),
          },
        },
      },
    });

    this.internals.updateOrder = new BaseFunction(this, {
      name: 'internal-update-order',
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      eventBus: this.props.customEventBus.bus,
      tablePermission: 'write',
      environment: {
        AUTO_EVENTS: 'true',
      },
    }).lambdaFunction;

    this.internals.updateSuccessOrderIncome = new BaseFunction(this, {
      name: 'internal-update-success-order-income',
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      eventBus: this.props.customEventBus.bus,
      tablePermission: 'readWrite',
      environment: {
        AUTO_EVENTS: 'true',
      },
    }).lambdaFunction;

    this.internals.updateProcessOrder = new BaseFunction(this, {
      name: 'internal-update-process-order',
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      eventBus: this.props.customEventBus.bus,
      tablePermission: 'readWrite',
      environment: {
        AUTO_EVENTS: 'true',
      },
    }).lambdaFunction;

    this.apiAggregate?.table?.addGlobalSecondaryIndex({
      indexName: 'sellerTransferred-index',
      projectionType: ProjectionType.INCLUDE,
      nonKeyAttributes: [
        'orderStatus',
        'orderType',
        'partOfSeller',
        'sellerId',
        'sellerAvailableAt',
        'sellerTransferredProcessedAt',
        'pk',
        'sk',
      ],
      partitionKey: {
        name: 'sellerTransferred',
        type: AttributeType.STRING,
      },
      sortKey: {
        name: 'createdAt',
        type: AttributeType.STRING,
      },
    });

    this.apiAggregate?.table?.addGlobalSecondaryIndex({
      indexName: 'sellerId-index',
      projectionType: ProjectionType.ALL,
      partitionKey: {
        name: 'sellerId',
        type: AttributeType.STRING,
      },
    });

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      handlers: {
        eventPayoutResponse: {
          tablePermission: 'readWrite',
          name: 'event-payout-response',
          eventConfig: [payoutFailed.eventConfig, payoutSuccess.eventConfig],
        },
        eventReviewCreated: {
          tablePermission: 'readWrite',
          name: 'event-review-created',
          eventConfig: [reviewRepo.events.created],
        },
        eventOrderNotification: {
          tablePermission: 'none',
          name: 'event-order-notification',
          environment: {
            PROJECT_NAME: this.props.projectName,
            WEBAPP_URL: getDomain(this.props.subdomain.webapp, this.props),
            MEDIA_URL: getDomain(this.props.subdomain.media, this.props),
          },
          eventConfig: [orderIncomePaid.eventConfig, orderProposalCreated.eventConfig],
        },
      },
    });
  }
}
