import { CfnOutput, Duration, Fn, RemovalPolicy } from 'aws-cdk-lib';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import * as awsCloudfront from 'aws-cdk-lib/aws-cloudfront';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { HttpMethods } from 'aws-cdk-lib/aws-s3';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

import { getDomain } from 'common/naming/get-domain';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName, getShortResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { SynthError } from 'common/synth/synth-error';

import {
  AllowedMethods,
  BehaviorOptions,
  CacheCookieBehavior,
  CacheHeaderBehavior,
  CachePolicy,
  CacheQueryStringBehavior,
  CachedMethods,
  Distribution,
  HttpVersion,
  IOriginAccessIdentity,
  OriginAccessIdentity,
  PriceClass,
  SSLMethod,
  SecurityPolicyProtocol,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { HttpOrigin, OriginGroup, S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { WafPrefab } from 'prefab/networking/waf';
import { PrivateBucketPrefab } from 'prefab/storage/bucket/private-bucket';
import { FrontendEnvBuilder } from 'prefab/util/config/frontend-env-builder';

export type SsrPrefabParams = {
  subDomain: string;
  certificate: ICertificate;
  assetMaxAge?: string;
  indexMaxAge?: string;
  baseDir?: string;
  distDir?: string;
  calculatedSecrets?: Record<string, string>;
  waf?: WafPrefab;
  skipRecord?: true;
  wwwRedirectEnabled?: true;
  // deployTriggeredEventConfig: EventConfig & { bus: string };
  filesPathAssets: string;
  filesPathNextFunction: string;
  filesPathImageFunction: string;
  filesPathMiddlewareFunction: string;
};

export class SsrPrefabLatest extends Construct {
  public readonly domain: string;
  public readonly baseUrl: string;
  public readonly distribution: awsCloudfront.Distribution;
  public readonly bucket: PrivateBucketPrefab;

  constructor(service: Service, params: SsrPrefabParams) {
    super(service, getLogicalName(SsrPrefabLatest.name, params.subDomain));

    this.domain = getDomain(params.subDomain, service.props);
    this.baseUrl = `https://${this.domain}/`;

    this.bucket = new PrivateBucketPrefab(service, {
      bucketName: 'ssr',
      bucketProps: {
        removalPolicy: RemovalPolicy.DESTROY,
        autoDeleteObjects: true,
        cors: [
          {
            allowedMethods: [HttpMethods.GET, HttpMethods.HEAD],
            allowedOrigins: ['*'],
            allowedHeaders: ['*'],
          },
        ],
      },
    });

    new BucketDeployment(this, 'DeployAssetsBucket', {
      sources: [Source.asset(params.filesPathAssets)],
      destinationBucket: this.bucket.bucket,
      destinationKeyPrefix: '',
      prune: true,
      retainOnDelete: false,
    });

    // next function
    // const serverFunction = new BaseFunction(service, {
    //   handler: 'index.handler',
    //   currentVersionOptions: {
    //     removalPolicy: RemovalPolicy.DESTROY,
    //   },
    //   logRetention: RetentionDays.FIVE_DAYS,
    //   runtime: lambda.Runtime.NODEJS_18_X,
    //   memorySize: 2048,
    //   timeout: Duration.seconds(5),
    //   baseFunctionString: params.filesPathNextFunction,
    //   name: 'server-function',
    // });

    // NextJS Server Function
    const serverFunction = new lambda.Function(this, 'MyServerFunction', {
      functionName: getShortResourceName('server-function', service.props),
      handler: 'index.handler',
      currentVersionOptions: {
        removalPolicy: RemovalPolicy.DESTROY,
      },
      logRetention: RetentionDays.FIVE_DAYS,
      runtime: lambda.Runtime.NODEJS_18_X,
      memorySize: 2048,
      timeout: Duration.seconds(5),
      code: lambda.Code.fromAsset(params.filesPathNextFunction),
    });

    // image function
    // const imageFunction = new BaseFunction(service, {
    //   handler: 'index.handler',
    //   currentVersionOptions: {
    //     removalPolicy: RemovalPolicy.DESTROY,
    //   },
    //   logRetention: RetentionDays.FIVE_DAYS,
    //   runtime: lambda.Runtime.NODEJS_18_X,
    //   memorySize: 1536,
    //   timeout: Duration.seconds(25),
    //   baseFunctionString: params.filesPathImageFunction,
    //   name: 'image-function',
    //   environment: {
    //     BUCKET_NAME: this.bucket.bucket.bucketName,
    //     // TODO: Add allowed domains here. These are on the nextjs config file.
    //     NEXT_IMAGE_ALLOWED_DOMAINS: '',
    //   },
    //   initialPolicy: [
    //     new PolicyStatement({
    //       actions: ['s3:GetObject'],
    //       resources: [this.bucket.bucket.arnForObjects('*')],
    //     }),
    //   ],
    // });

    // Image Optimization Function
    const imageFunction = new lambda.Function(this, 'ImageFunction', {
      functionName: getShortResourceName('image-function', service.props),
      handler: 'index.handler',
      currentVersionOptions: {
        removalPolicy: RemovalPolicy.DESTROY,
      },
      logRetention: RetentionDays.FIVE_DAYS,
      runtime: lambda.Runtime.NODEJS_18_X,
      memorySize: 1536,
      code: lambda.Code.fromAsset(params.filesPathImageFunction),
      architecture: lambda.Architecture.ARM_64,
      timeout: Duration.seconds(25),
      environment: {
        BUCKET_NAME: this.bucket.bucket.bucketName,
        // TODO: Add allowed domains here. These are on the nextjs config file.
        NEXT_IMAGE_ALLOWED_DOMAINS: '',
      },
      initialPolicy: [
        new PolicyStatement({
          actions: ['s3:GetObject'],
          resources: [this.bucket.bucket.arnForObjects('*')],
        }),
      ],
    });

    // middleware function
    // const middlewareFunction = new BaseFunction(service, {
    //   handler: 'index.handler',
    //   currentVersionOptions: {
    //     removalPolicy: RemovalPolicy.DESTROY,
    //   },
    //   logRetention: RetentionDays.FIVE_DAYS,
    //   runtime: lambda.Runtime.NODEJS_18_X,
    //   memorySize: 128,
    //   timeout: Duration.seconds(25),
    //   baseFunctionString: params.filesPathMiddlewareFunction,
    //   name: 'middleware-function',
    // });

    // const middlewareFunction = new lambda.Function(this, 'MiddlewareFunction', {
    //   functionName: getShortResourceName('middleware-function', service.props),
    //   handler: 'index.handler',
    //   currentVersionOptions: {
    //     removalPolicy: RemovalPolicy.DESTROY,
    //   },
    //   logRetention: RetentionDays.FIVE_DAYS,
    //   runtime: lambda.Runtime.NODEJS_18_X,
    //   memorySize: 128,
    //   code: lambda.Code.fromAsset(params.filesPathMiddlewareFunction),
    // });

    const oai: IOriginAccessIdentity = new OriginAccessIdentity(this, getResourceName('oai', service.props));

    this.bucket.bucket.grantRead(oai);

    const origin2 = new S3Origin(this.bucket.bucket, {
      originId: getResourceName('OriginId', service.props),
      originAccessIdentity: oai,
    });

    // Create server behavior
    const serverFnUrl = serverFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    const serverBehavior = {
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      origin: new HttpOrigin(Fn.parseDomainName(serverFnUrl.url)),
      allowedMethods: AllowedMethods.ALLOW_ALL,
      cachedMethods: CachedMethods.CACHE_GET_HEAD_OPTIONS,
      compress: true,
      cachePolicy: this.createCloudFrontServerCachePolicy(),
      // edgeLambdas: [
      //   {
      //     eventType: LambdaEdgeEventType.VIEWER_REQUEST,
      //     functionVersion: middlewareFunction.currentVersion,
      //   },
      // ],
    };

    // Create image optimization behavior
    const imageFnUrl = imageFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });
    const imageBehavior = {
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      origin: new HttpOrigin(Fn.parseDomainName(imageFnUrl.url)),
      allowedMethods: AllowedMethods.ALLOW_ALL,
      cachedMethods: CachedMethods.CACHE_GET_HEAD_OPTIONS,
      compress: true,
      cachePolicy: serverBehavior.cachePolicy,
    };

    // Create statics behavior
    const staticFileBehaviour: BehaviorOptions = {
      origin: origin2,
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
      cachedMethods: CachedMethods.CACHE_GET_HEAD_OPTIONS,
      compress: true,
      cachePolicy: CachePolicy.CACHING_OPTIMIZED,
    };

    const domains = [this.domain];
    if (params.wwwRedirectEnabled) {
      if (params.subDomain)
        throw new SynthError('wwwRedirectEnabled is only allowed in the root domain', service.props);
      domains.push(`www.${this.domain}`);
    }

    // Create default behavior
    // default handler for requests that don't match any other path:
    //   - try lambda handler first first
    //   - if failed, fall back to S3
    const fallbackOriginGroup = new OriginGroup({
      primaryOrigin: serverBehavior.origin,
      fallbackOrigin: origin2,
      fallbackStatusCodes: [404],
    });
    const defaultBehavior = {
      origin: fallbackOriginGroup,

      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      compress: true,
      cachePolicy: serverBehavior.cachePolicy,
      // edgeLambdas: serverBehavior.edgeLambdas,
    };

    this.distribution = new Distribution(this, 'MyDistribution', {
      defaultRootObject: '',
      domainNames: domains, // specify at least one domain name here
      certificate: params.certificate,
      comment: getResourceName('cdn', service.props),
      enableIpv6: false,
      enabled: true,
      httpVersion: HttpVersion.HTTP2,
      priceClass: PriceClass.PRICE_CLASS_100,
      minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
      sslSupportMethod: SSLMethod.SNI,
      defaultBehavior: defaultBehavior,
      additionalBehaviors: {
        '_next/static/*': staticFileBehaviour,
        '_next/image*': imageBehavior,
        '_next/data/*': serverBehavior,
        'api/*': serverBehavior,
      },
    });

    if (!params.skipRecord) {
      const hostedZone = HostedZone.fromLookup(this, 'HostedZoneEnvDns', { domainName: getDomain('', service.props) });
      domains.map((d) => {
        new ARecord(service, d.split('.')[0], {
          zone: hostedZone,
          target: RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
          recordName: d,
        });
      });
    }

    new FrontendEnvBuilder(service, { ...params, name: params.subDomain });

    new StringParameter(this, 'Config', {
      simpleName: true,
      parameterName: getResourceName('config', service.props),
      stringValue: JSON.stringify({
        domain: this.domain,
        distributionBucket: this.bucket.bucket.bucketName,
        distributionId: this.distribution.distributionId,
        // deployTriggeredEventConfig: params.deployTriggeredEventConfig,
        assetMaxAge: params.assetMaxAge || '300',
        indexMaxAge: params.indexMaxAge || '1800',
        baseDir: params.baseDir || `frontend/${service.props.serviceName}`,
        distDir: params.distDir || 'build',
      }),
    });
    new CfnOutput(this, 'Domain', { value: this.domain });
    new CfnOutput(this, 'BaseUrl', { value: this.baseUrl });
  }

  protected createCloudFrontServerCachePolicy(): CachePolicy {
    return new CachePolicy(this, 'ServerCache', {
      queryStringBehavior: CacheQueryStringBehavior.all(),
      headerBehavior: CacheHeaderBehavior.allowList(
        // required by image optimization request
        'Accept',
        // required by server request
        'x-op-middleware-request-headers',
        'x-op-middleware-response-headers',
        'x-nextjs-data',
        'x-middleware-prefetch',
        // required by server request (in-place routing)
        'rsc',
        'next-router-prefetch',
        'next-router-state-tree'
      ),
      cookieBehavior: CacheCookieBehavior.all(),
      defaultTtl: Duration.days(0),
      maxTtl: Duration.days(365),
      minTtl: Duration.days(0),
      enableAcceptEncodingBrotli: true,
      enableAcceptEncodingGzip: true,
      comment: 'Server response cache policy',
    });
  }
}
