import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { RuntimeSecret } from '@sinapsis-co/cc-infra-v2/prefab/config/runtime-secret';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import {
  BehaviorOptions,
  CachePolicy,
  CacheQueryStringBehavior,
  OriginRequestPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { CfnSecret } from 'aws-cdk-lib/aws-secretsmanager';
import { GlobalProps } from 'config/config-type';
import { GlobalServiceDependencies } from '../../business';
import { apiStripe, secretsStripe } from './catalog';

export type StripeParams = Omit<GlobalServiceDependencies, 'identity'>;

export class StripeSupportService extends Service<GlobalProps, StripeParams> {
  public readonly secret: CfnSecret;
  public readonly runtimeSecret: RuntimeSecret;
  public readonly apiAggregate: ApiAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: StripeParams) {
    super(scope, StripeSupportService.name, globalProps, { params });

    this.runtimeSecret = new RuntimeSecret(this, secretsStripe.stripe);
    this.secret = this.runtimeSecret.secret;

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
      basePath: 'stripe-support',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: { ...this.props.cdnApi, behaviorOptions },
      autoEventsEnabled: true,
      skipTable: true,
      handlers: {
        webhook: {
          ...apiStripe.webhookHandler.config,
          modifiers: [this.runtimeSecret.useModReader()],
        },
      },
    });
  }
  public SecretReader(): (lambda: NodejsFunction) => void {
    return this.runtimeSecret.useModReader();
  }
}
