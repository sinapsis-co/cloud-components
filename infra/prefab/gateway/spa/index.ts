import { CfnOutput, Duration, RemovalPolicy } from 'aws-cdk-lib';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
  AllowedMethods,
  CachePolicy,
  Distribution,
  OriginRequestPolicy,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { HttpMethods } from 'aws-cdk-lib/aws-s3';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

import { getDomain } from '../../../common/naming/get-domain';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getCloudFrontName, getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';
import { SynthError } from '../../../common/synth/synth-error';
import { WafPrefab } from '../../networking/waf';
import { PrivateBucketPrefab } from '../../storage//bucket/private-bucket';
import { DeploySecret, DeploySecretProps } from '../../util/config/deploy-secret';

export type WebappConstructParams = {
  subDomain: string;
  certificate: ICertificate;
  assetMaxAge?: string;
  indexMaxAge?: string;
  baseDir?: string;
  distDir?: string;
  envVars?: Omit<DeploySecretProps, 'name'>;
  waf?: WafPrefab;
  skipRecord?: true;
  wwwRedirectEnabled?: true;
};

export class SpaPrefab extends Construct {
  private readonly domain: string;
  private readonly baseUrl: string;
  private readonly distribution: Distribution;

  constructor(service: Service, params: WebappConstructParams) {
    super(service, getLogicalName(SpaPrefab.name, params.subDomain));

    this.domain = getDomain(params.subDomain, service.props);
    this.baseUrl = `https://${this.domain}/`;

    const privateBucketPrefab = new PrivateBucketPrefab(service, {
      bucketName: 'spawebapp',
      bucketProps: {
        autoDeleteObjects: true,
        removalPolicy: RemovalPolicy.DESTROY,
        cors: [
          {
            allowedMethods: [HttpMethods.GET, HttpMethods.HEAD],
            allowedOrigins: ['*'],
            allowedHeaders: ['*'],
          },
        ],
      },
    });

    const behaviorOptions = {
      compress: true,
      origin: new S3Origin(privateBucketPrefab.bucket, {
        originId: getCloudFrontName('Origin', 'Default', service.props),
      }),
      originRequestPolicy: new OriginRequestPolicy(this, 'OriginRequestPolicy', {
        originRequestPolicyName: getCloudFrontName('Bucket', 'RequestPolicy', service.props),
        headerBehavior: {
          behavior: 'whitelist',
          headers: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Origin'],
        },
      }),
      cachePolicy: CachePolicy.CACHING_OPTIMIZED,
      cachedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
      allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    };

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
      defaultBehavior: behaviorOptions,
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
        bucketName: privateBucketPrefab.bucket.bucketName,
        distributionId: this.distribution.distributionId,
        assetMaxAge: params.assetMaxAge || '604800',
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
