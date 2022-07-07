import { Construct } from 'constructs';
import { RemovalPolicy, Duration, CfnOutput } from 'aws-cdk-lib';
import { HostedZone, ARecord, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { HttpMethods } from 'aws-cdk-lib/aws-s3';
import { Distribution, AllowedMethods, ViewerProtocolPolicy, OriginRequestPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';

import { getDomain } from '../../common/naming/get-domain';
import { Service } from '../../common/service';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';
import { DeploySecret, DeploySecretProps } from '../../prefab/config/deploy-secret';
import { Waf } from '../waf';
import { SynthError } from '../../common/synth/synth-error';
import { PrivateBucket } from '../../prefab/bucket/private-bucket';
import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';

export type SsrConstructParams = {
  subDomain: string;
  certificate: ICertificate;
  assetMaxAge?: string;
  indexMaxAge?: string;
  baseDir?: string;
  distDir?: string;
  envVars?: Omit<DeploySecretProps, 'name'>;
  waf?: Waf;
  skipRecord?: true;
  wwwRedirectEnabled?: true;
  deployTriggeredEventConfig: EventConfig;
};

export class SsrConstruct extends Construct {
  public readonly domain: string;
  public readonly baseUrl: string;
  public readonly distribution: Distribution;
  public readonly distributionBucket: PrivateBucket;
  public readonly recipeBucket: PrivateBucket;

  constructor(service: Service, params: SsrConstructParams) {
    super(service, getLogicalName(SsrConstruct.name, params.subDomain));

    this.domain = getDomain(params.subDomain, service.props);
    this.baseUrl = `https://${this.domain}/`;

    this.distributionBucket = new PrivateBucket(service, {
      bucketName: 'distribution',
      bucketProps: {
        removalPolicy: RemovalPolicy.DESTROY,
        cors: [
          {
            allowedMethods: [HttpMethods.GET, HttpMethods.HEAD],
            allowedOrigins: ['*'],
            allowedHeaders: ['*'],
          },
        ],
        autoDeleteObjects: true,
      },
    });

    this.recipeBucket = new PrivateBucket(service, {
      bucketName: 'recipe',
    });

    const originRequestPolicy = new OriginRequestPolicy(this, 'OriginRequestPolicy', {
      headerBehavior: {
        behavior: 'whitelist',
        headers: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Origin'],
      },
    });

    const domains = [this.domain];
    if (params.wwwRedirectEnabled) {
      if (params.subDomain)
        throw new SynthError('wwwRedirectEnabled is only allowed in the root domain', service.props);
      domains.push(`www.${this.domain}`);
    }
    this.distribution = new Distribution(this, 'Distribution', {
      enabled: true,
      comment: getResourceName('cdn', service.props),
      certificate: params.certificate,
      domainNames: domains,
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          ttl: Duration.seconds(86400),
          responsePagePath: '/index.html',
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: Duration.seconds(86400),
        },
      ],
      defaultBehavior: {
        origin: new S3Origin(this.distributionBucket.bucket),
        originRequestPolicy: originRequestPolicy,
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        compress: true,
      },
      webAclId: params.waf?.webACL?.attrArn,
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

    new StringParameter(this, 'Config', {
      simpleName: true,
      parameterName: getResourceName('config', service.props),
      stringValue: JSON.stringify({
        domain: this.domain,
        distributionBucket: this.distributionBucket.bucket.bucketName,
        recipeBucket: this.recipeBucket.bucket.bucketName,
        distributionId: this.distribution.distributionId,
        deployTriggeredEventConfig: params.deployTriggeredEventConfig,
        assetMaxAge: params.assetMaxAge || '300',
        indexMaxAge: params.indexMaxAge || '1800',
        baseDir: params.baseDir || `frontend/${service.props.serviceName}`,
        distDir: params.distDir || 'build',
      }),
    });
    new CfnOutput(this, 'Domain', { value: this.domain });
    new CfnOutput(this, 'BaseUrl', { value: this.baseUrl });

    if (params.envVars) new DeploySecret(service, { ...params.envVars, name: params.subDomain });
  }
}
