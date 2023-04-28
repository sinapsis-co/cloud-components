import { CfnOutput, Fn } from 'aws-cdk-lib';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import * as awsCloudfront from 'aws-cdk-lib/aws-cloudfront';
import { HttpOrigin, HttpOriginProps, LoadBalancerV2Origin, RestApiOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { ApplicationLoadBalancer } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { Construct } from 'constructs';

import { getDomain } from 'common/naming/get-domain';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getCloudFrontName, getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { SynthError } from 'common/synth/synth-error';

import { PublicAlbPrefab } from 'prefab/gateway/alb-public';
import { ApiRestPrefab } from 'prefab/gateway/api/api-rest';
import { WafPrefab } from 'prefab/networking/waf';
import { PrivateBucketPrefab } from 'prefab/storage/bucket/private-bucket';

export type CdnApiPrefabParams = {
  subDomain: string;
  certificate: ICertificate;
  albDefaultBehavior?: PublicAlbPrefab;
  restApiDefaultBehavior?: ApiRestPrefab;
  headersWhitelist?: string[];
  waf?: WafPrefab;
  skipRecord?: true;
};

export class CdnApiPrefab extends Construct {
  public readonly domain: string;
  public readonly baseUrl: string;
  private readonly service: Service;
  private readonly distribution: awsCloudfront.Distribution;
  private readonly apiGatewayRequestPolicy: awsCloudfront.OriginRequestPolicy;
  private readonly apiGatewayCachePolicy: awsCloudfront.CachePolicy;
  private readonly apiGatewayBehaviorOptions: Omit<awsCloudfront.BehaviorOptions, 'origin'>;
  private readonly unrestrictedBehaviorOptions: Omit<awsCloudfront.BehaviorOptions, 'origin'>;

  constructor(service: Service, params: CdnApiPrefabParams) {
    super(service, getLogicalName(CdnApiPrefab.name, params.subDomain));

    this.service = service;
    this.domain = getDomain(params.subDomain, service.props);
    this.baseUrl = `https://${this.domain}/`;

    if (params.albDefaultBehavior && params.restApiDefaultBehavior)
      throw new SynthError('Only alb or api can be default behavior', service.props);

    // Api Gateway Policies
    this.apiGatewayCachePolicy = new awsCloudfront.CachePolicy(this, 'CachePolicy', {
      cachePolicyName: getCloudFrontName('ApiGateway', 'CachePolicy', this.service.props),
      queryStringBehavior: awsCloudfront.CacheQueryStringBehavior.all(),
      headerBehavior: {
        behavior: 'whitelist',
        headers: ['Authorization'],
      },
    });

    this.apiGatewayRequestPolicy = new awsCloudfront.OriginRequestPolicy(this, 'OriginRequestPolicy', {
      originRequestPolicyName: getCloudFrontName('ApiGateway', 'RequestPolicy', this.service.props),
      // headerBehavior: awsCloudfront.OriginRequestHeaderBehavior.all('Authorization'),
      headerBehavior: {
        behavior: 'whitelist',
        headers: [
          ...(params.headersWhitelist || []),
          'Access-Control-Allow-Origin',
          'Access-Control-Request-Method',
          'Access-Control-Allow-Headers',
          'Access-Control-Request-Headers',
          'Origin',
        ],
      },
      queryStringBehavior: awsCloudfront.OriginRequestQueryStringBehavior.all(),
    });

    this.apiGatewayBehaviorOptions = {
      compress: true,
      cachePolicy: this.apiGatewayCachePolicy,
      originRequestPolicy: this.apiGatewayRequestPolicy,
      allowedMethods: awsCloudfront.AllowedMethods.ALLOW_ALL,
      viewerProtocolPolicy: awsCloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    };

    // Integrations Policies
    this.unrestrictedBehaviorOptions = {
      compress: true,
      cachePolicy: awsCloudfront.CachePolicy.CACHING_DISABLED,
      originRequestPolicy: awsCloudfront.OriginRequestPolicy.ALL_VIEWER,
      allowedMethods: awsCloudfront.AllowedMethods.ALLOW_ALL,
      viewerProtocolPolicy: awsCloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    };

    // Default Behavior
    let defaultBehavior: awsCloudfront.BehaviorOptions = {
      origin: new HttpOrigin(
        new PrivateBucketPrefab(service, { bucketName: 'default-origin' }).bucket.bucketDomainName,
        { originId: getCloudFrontName('Origin', 'Default', this.service.props) }
      ),
      ...this.apiGatewayBehaviorOptions,
    };

    if (params.albDefaultBehavior) {
      defaultBehavior = {
        origin: new LoadBalancerV2Origin(params.albDefaultBehavior.alb, {
          originId: getCloudFrontName('Origin', 'Default', this.service.props),
        }),
        ...this.unrestrictedBehaviorOptions,
      };
    }

    if (params.restApiDefaultBehavior) {
      defaultBehavior = {
        origin: new RestApiOrigin(params.restApiDefaultBehavior.api, {
          originId: getCloudFrontName('Origin', 'Default', this.service.props),
        }),
        ...this.unrestrictedBehaviorOptions,
        originRequestPolicy: awsCloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
      };
    }

    // Distribution
    this.distribution = new awsCloudfront.Distribution(this, 'Distribution', {
      enabled: true,
      comment: getResourceName('cdn', service.props),
      certificate: params.certificate,
      domainNames: [this.domain],
      defaultBehavior,
      ...(service.props.envName !== 'prod' ? { priceClass: awsCloudfront.PriceClass.PRICE_CLASS_100 } : {}),
      webAclId: params.waf?.webACL?.attrArn,
    });

    // Route53
    if (!params.skipRecord) {
      const hostedZone = HostedZone.fromLookup(this, 'HostedZoneEnvDns', { domainName: getDomain('', service.props) });
      new ARecord(service, 'Record', {
        zone: hostedZone,
        target: RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
        recordName: this.domain,
      });
    }
    new CfnOutput(this, 'Domain', { value: this.domain });
    new CfnOutput(this, 'BaseUrl', { value: this.baseUrl });
  }

  public addApiGateway(basePath: string, apiUrl: string, originOptions?: HttpOriginProps): void {
    this.distribution.addBehavior(
      `/${basePath}*`,
      new HttpOrigin(apiUrl, { originId: getCloudFrontName('Origin', basePath, this.service.props), ...originOptions }),
      this.apiGatewayBehaviorOptions
    );
  }

  public addAppSync(apiUrl: string, originOptions?: HttpOriginProps): void {
    this.distribution.addBehavior(
      '/graphql*',
      new HttpOrigin(Fn.select(2, Fn.split('/', apiUrl)), {
        originId: getCloudFrontName('Origin', 'graphql', this.service.props),
        ...originOptions,
      }),
      this.unrestrictedBehaviorOptions
    );
  }

  public addAlb(basePath: string, alb: ApplicationLoadBalancer): void {
    this.distribution.addBehavior(
      `/${basePath}/*`,
      new LoadBalancerV2Origin(alb, { originId: getCloudFrontName('Origin', basePath, this.service.props) }),
      this.unrestrictedBehaviorOptions
    );
  }
}
