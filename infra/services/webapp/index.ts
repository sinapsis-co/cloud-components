import { Construct } from 'constructs';
import { RemovalPolicy, Duration, CfnOutput } from 'aws-cdk-lib';
import { HostedZone, ARecord, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { Bucket, BlockPublicAccess, BucketEncryption, HttpMethods } from 'aws-cdk-lib/aws-s3';
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

export type WebappConstructParams = {
  subDomain: string;
  certificate: Certificate;
  assetMaxAge?: string;
  indexMaxAge?: string;
  baseDir?: string;
  distDir?: string;
  envVars?: DeploySecretProps;
  waf?: Waf;
};

export class WebappConstruct extends Construct {
  public readonly domain: string;
  public readonly baseUrl: string;
  public readonly distribution: Distribution;

  constructor(service: Service, params: WebappConstructParams) {
    super(service, getLogicalName(WebappConstruct.name, params.subDomain));

    this.domain = getDomain(params.subDomain, service.props);
    this.baseUrl = `https://${this.domain}/`;

    const bucket = new Bucket(this, 'WebappBucket', {
      bucketName: getResourceName('webapp', service.props),
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      publicReadAccess: false,
      encryption: BucketEncryption.S3_MANAGED,
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
      cors: [
        {
          allowedMethods: [HttpMethods.GET, HttpMethods.HEAD],
          allowedOrigins: ['*'],
          allowedHeaders: ['*'],
        },
      ],
    });

    const originRequestPolicy = new OriginRequestPolicy(this, 'OriginRequestPolicy', {
      headerBehavior: {
        behavior: 'whitelist',
        headers: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Origin'],
      },
    });

    this.distribution = new Distribution(this, 'Distribution', {
      enabled: true,
      comment: getResourceName('cdn', service.props),
      certificate: params.certificate,
      domainNames: [this.domain],
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
        origin: new S3Origin(bucket),
        originRequestPolicy: originRequestPolicy,
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        compress: true,
      },
      webAclId: params.waf?.webACL?.attrArn,
    });

    const hostedZone = HostedZone.fromLookup(this, 'HostedZoneEnvDns', { domainName: getDomain('', service.props) });

    new ARecord(service.scope, 'WebappRecords', {
      zone: hostedZone,
      target: RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
      recordName: this.domain,
    });

    new StringParameter(this, 'Config', {
      simpleName: true,
      parameterName: getResourceName('config', service.props),
      stringValue: JSON.stringify({
        domain: this.domain,
        bucketName: bucket.bucketName,
        distributionId: this.distribution.distributionId,
        assetMaxAge: params.assetMaxAge || '604800',
        indexMaxAge: params.indexMaxAge || '1800',
        baseDir: params.baseDir || `frontend/${service.props.serviceName}`,
        distDir: params.distDir || 'build',
      }),
    });
    new CfnOutput(this, 'Domain', { value: this.domain });
    new CfnOutput(this, 'BaseUrl', { value: this.baseUrl });

    if (params.envVars) new DeploySecret(service, { ...params.envVars });
  }
}
