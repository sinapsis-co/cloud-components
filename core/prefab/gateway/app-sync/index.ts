/* eslint-disable @typescript-eslint/ban-types */
import 'reflect-metadata';

import { CfnOutput } from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { UserPool } from 'aws-cdk-lib/aws-cognito';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { CnameRecord, HostedZone } from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';

import { getDomain } from 'common/naming/get-domain';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { SynthError } from 'common/synth/synth-error';
import { EventBusPrefab } from 'prefab/integration/event-bus';

import { buildSchemaSync, NonEmptyArray } from 'type-graphql';

import { log } from 'console';
import path from 'path';
import { CdnApiPrefab } from '../cdn-api';

export type AppSyncPrefabParams = {
  name: string;
  baseFolder: string;
  schemas: NonEmptyArray<Function>;
  eventBusPrefab?: EventBusPrefab;
  userPool?: UserPool;
  cdnApiPrefab?: CdnApiPrefab;
  domainConfig?: {
    certificate: ICertificate;
    subdomain: string;
  };
};

export class AppSyncPrefab extends Construct {
  public api: appsync.GraphqlApi;
  public eventBridgeDataSource: EventBridgeDataSource;
  public schemas: NonEmptyArray<Function>;

  constructor(service: Service, params: AppSyncPrefabParams) {
    super(service, getLogicalName(AppSyncPrefab.name));

    if (params.cdnApiPrefab && params.domainConfig)
      throw new SynthError('Cannot use cdnApi and custom domain at the same time');

    this.schemas = params.schemas;

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

    log('<< Building GraphQL Schema >>');
    const schemaPath = path.join(params.baseFolder, 'consolidated.graphql');
    buildSchemaSync({
      resolvers: this.schemas as NonEmptyArray<Function>,
      emitSchemaFile: schemaPath,
    });
    log('<< GraphQL Schema Built >>');

    this.api = new appsync.GraphqlApi(this, 'Api', {
      name: getResourceName('', service.props),
      schema: appsync.SchemaFile.fromAsset(schemaPath),
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

  // addSchema(schema: Function) {
  //   if (!this.schemas) this.schemas = [];
  //   this.schemas.push(schema);
  // }
}

export class EventBridgeDataSource extends appsync.BackedDataSource {
  constructor(scope: Construct, id: string, props: appsync.BackedDataSourceProps) {
    super(scope, id, props, {
      type: 'AMAZON_EVENTBRIDGE',
    });
  }
}
