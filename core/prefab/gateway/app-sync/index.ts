import { CfnOutput } from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { UserPool } from 'aws-cdk-lib/aws-cognito';
import { CnameRecord, HostedZone } from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';
import * as esbuild from 'esbuild';

import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { getDomain } from 'common/naming/get-domain';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { SynthError } from 'common/synth/synth-error';
import { DynamoTablePrefab } from 'prefab/storage/dynamo/table';
import { CdnApiPrefab } from '../cdn-api';
import { EventBridgeDataSourceParams, FunctionResolver, ServiceResolver } from './types';

export type AppSyncPrefabParams = {
  name: string;
  consolidatedSchemaPath: string;
  userPool?: UserPool;
  cdnApiPrefab?: CdnApiPrefab;
  domainConfig?: {
    certificate: ICertificate;
    subdomain: string;
  };
};

export class AppSyncPrefab extends Construct {
  public readonly api: appsync.GraphqlApi;
  public readonly baseApiFolder: string;

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

    // info('\n<< Generating GraphQL schema files >>');
    // const loadedFiles = params.schemaMergingPaths.reduce((memo: string[], m) => {
    //   const files = loadFilesSync(m);
    //   memo.push(...files);
    //   return memo;
    // }, []);
    // const typeDefs = mergeTypeDefs(loadedFiles);
    // const printedTypeDefs = print(typeDefs);
    // writeFileSync(params.consolidatedSchemaPath, printedTypeDefs, { encoding: 'utf8', flag: 'w' });
    // const schema = appsync.SchemaFile.fromAsset(params.consolidatedSchemaPath);
    // info('\n Merged Schema generated at: \n', params.consolidatedSchemaPath);

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

    if (params.domainConfig) {
      const hostedZone = HostedZone.fromLookup(this, 'HostedZoneEnvDns', { domainName: getDomain('', service.props) });
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

  addDynamoTableDataSource = (tablePrefab: DynamoTablePrefab): appsync.DynamoDbDataSource => {
    return this.api.addDynamoDbDataSource(tablePrefab.tableName, tablePrefab.table, {
      name: `${tablePrefab.tableName}TableDataSource`,
    });
  };

  static eventBridgeDataSource = (service: Service, params: EventBridgeDataSourceParams): EventBridgeDataSource => {
    // const role = new Role(this, getLogicalName('role', params.name), {
    //   assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
    //   roleName: getShortResourceName(params.name, service.props),
    // });
    const ds = new EventBridgeDataSource(service, 'EventBridgeDataSource', {
      name: 'EventBridgeDataSource',
      api: params.api,
    });
    appsync.CfnDataSource;
    const cfDs = ds.node.defaultChild as appsync.CfnDataSource;
    cfDs.eventBridgeConfig = { eventBusArn: params.eventBusPrefab.bus.eventBusArn };
    params.eventBusPrefab.bus.grantPutEventsTo(ds);
    return ds;
    // const ds = new appsync.HttpDataSource(service, 'EventBridgeDataSource', {
    //   api: params.api,
    //   endpoint: `https://events.${service.props.regionName}.amazonaws.com`,
    //   authorizationConfig: {
    //     signingRegion: service.props.regionName,
    //     signingServiceName: 'events',
    //   },
    // });
    // params.eventBusPrefab.bus.grantPutEventsTo(ds);
    // return ds;
  };

  static functionResolver = (service: Service, params: FunctionResolver): appsync.AppsyncFunction => {
    return new appsync.AppsyncFunction(service, getLogicalName('function', params.name), {
      api: params.api,
      dataSource: params.dataSource,
      name: params.name,
      code: AppSyncPrefab.bundleAppSyncResolver(`${params.baseApiFolder}/resolvers/${params.name}.ts`),
      runtime: appsync.FunctionRuntime.JS_1_0_0,
    });
  };

  static serviceResolver = (service: Service, params: ServiceResolver): void => {
    const { api, baseApiFolder, resolvers, tablePrefab } = params;

    const dataSource = new appsync.DynamoDbDataSource(
      service,
      getLogicalName('dynamoDataSource', tablePrefab.tableName),
      { api: api, table: tablePrefab.table, name: `${tablePrefab.tableName}TableDataSource` }
    );

    resolvers.map((r) => {
      const fnPipeline =
        r.resolversPipeline && r.resolversPipeline.length > 1
          ? r.resolversPipeline.map((rp) =>
              AppSyncPrefab.functionResolver(service, {
                api,
                baseApiFolder,
                dataSource: rp.dataSource || dataSource,
                name: rp.name,
              })
            )
          : [
              AppSyncPrefab.functionResolver(service, {
                api,
                dataSource,
                baseApiFolder,
                name: r.fieldName,
              }),
            ];

      // PipelineResolver
      new appsync.Resolver(service, getLogicalName('pipeline', r.fieldName), {
        api: api,
        typeName: r.typeName,
        fieldName: r.fieldName,
        pipelineConfig: fnPipeline,
        code: appsync.Code.fromAsset(`${__dirname}/resolvers/pipeline.js`),
        runtime: appsync.FunctionRuntime.JS_1_0_0,
      });
    });
  };

  static bundleAppSyncResolver = (entryPoint: string): appsync.Code => {
    const result = esbuild.buildSync({
      entryPoints: [entryPoint],
      external: ['@aws-appsync/utils'],
      bundle: true,
      write: false,
      platform: 'node',
      target: 'esnext',
      format: 'esm',
      // minify: true,
      sourcesContent: false,
    });
    return appsync.Code.fromInline(result.outputFiles[0].text);
  };
}

export class EventBridgeDataSource extends appsync.BackedDataSource {
  constructor(scope: Construct, id: string, props) {
    super(scope, id, props, {
      type: 'AMAZON_EVENTBRIDGE',
    });
  }
}
