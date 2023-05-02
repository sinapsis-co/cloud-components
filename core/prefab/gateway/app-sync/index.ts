import { CfnOutput } from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { UserPool } from 'aws-cdk-lib/aws-cognito';
import { CnameRecord, HostedZone } from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';

import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { getDomain } from 'common/naming/get-domain';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { SynthError } from 'common/synth/synth-error';
import { EventBusPrefab } from 'prefab/integration/event-bus';
import { CdnApiPrefab } from '../cdn-api';

export type AppSyncPrefabParams = {
  name: string;
  consolidatedSchemaPath: string;
  eventBusPrefab?: EventBusPrefab;
  userPool?: UserPool;
  cdnApiPrefab?: CdnApiPrefab;
  domainConfig?: {
    certificate: ICertificate;
    subdomain: string;
  };
};

export class AppSyncPrefab extends Construct {
  public readonly api: appsync.GraphqlApi;
  public readonly eventBridgeDataSource: EventBridgeDataSource;

  constructor(service: Service, params: AppSyncPrefabParams) {
    super(service, getLogicalName(AppSyncPrefab.name));

    if (params.cdnApiPrefab && params.domainConfig)
      throw new SynthError('Cannot use cdnApi and custom domain at the same time');

    const defaultAuthorization: appsync.AuthorizationMode = params.userPool
      ? {
          authorizationType: appsync.AuthorizationType.USER_POOL,
          userPoolConfig: { userPool: params.userPool },
        }
      : { authorizationType: appsync.AuthorizationType.API_KEY };

    const domainConfig: appsync.GraphqlApiProps['domainName'] = params.domainConfig
      ? {
          certificate: params.domainConfig.certificate,
          domainName: getDomain(params.domainConfig.subdomain, service.props),
        }
      : undefined;

    this.api = new appsync.GraphqlApi(this, 'Api', {
      name: getResourceName('', service.props),
      schema: appsync.SchemaFile.fromAsset(params.consolidatedSchemaPath),
      authorizationConfig: { defaultAuthorization },
      domainName: domainConfig,
      logConfig: {
        fieldLogLevel: appsync.FieldLogLevel.ALL,
        retention: RetentionDays.ONE_MONTH,
      },
    });

    if (params.eventBusPrefab) {
      this.eventBridgeDataSource = new EventBridgeDataSource(service, 'EventBridgeDataSource', {
        name: 'EventBridgeDataSource',
        api: this.api,
      });
      appsync.CfnDataSource;
      const cfDs = this.eventBridgeDataSource.node.defaultChild as appsync.CfnDataSource;
      cfDs.eventBridgeConfig = { eventBusArn: params.eventBusPrefab.bus.eventBusArn };
      params.eventBusPrefab.bus.grantPutEventsTo(this.eventBridgeDataSource);
    }

    if (params.domainConfig) {
      const hostedZone = HostedZone.fromLookup(this, 'HostedZoneEnvDns', {
        domainName: getDomain('', service.props),
      });
      new CnameRecord(service, 'Record', {
        zone: hostedZone,
        recordName: domainConfig?.domainName,
        domainName: this.api.appSyncDomainName,
      });
    }
    if (params.cdnApiPrefab) {
      params.cdnApiPrefab.addAppSync(this.api.graphqlUrl);
    }
    new CfnOutput(this, 'Domain', { value: domainConfig?.domainName || this.api.graphqlUrl });
  }
}

export class EventBridgeDataSource extends appsync.BackedDataSource {
  constructor(scope: Construct, id: string, props) {
    super(scope, id, props, {
      type: 'AMAZON_EVENTBRIDGE',
    });
  }
}
