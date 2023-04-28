import { CfnOutput } from 'aws-cdk-lib';
import * as awsAppsync from 'aws-cdk-lib/aws-appsync';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { UserPool } from 'aws-cdk-lib/aws-cognito';
import { CnameRecord, HostedZone } from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';
import * as esbuild from 'esbuild';

import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { print } from 'graphql';
import path, { join } from 'path';

import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { getDomain } from 'common/naming/get-domain';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { info } from 'console';
import { writeFileSync } from 'fs';
import { DynamoTablePrefab } from 'prefab/storage/dynamo/table';

export type AppSyncPrefabParams = {
  name: string;
  baseApiFolder: string;
  userPool?: UserPool;
  domainConfig?: {
    certificate: ICertificate;
    subdomain: string;
  };
};

export type FunctionResolverParams = {
  baseApiFolder: string;
  fieldName: string;
  typeName: 'Mutation' | 'Query' | 'Subscription';
  dataSource: awsAppsync.BaseDataSource;
};

export class AppSyncPrefab extends Construct {
  public readonly api: awsAppsync.GraphqlApi;
  public readonly baseApiFolder: string;

  constructor(service: Service, params: AppSyncPrefabParams) {
    super(service, getLogicalName(AppSyncPrefab.name));

    this.baseApiFolder = params.baseApiFolder;

    const defaultAuthorization: awsAppsync.AuthorizationMode = params.userPool
      ? {
          authorizationType: awsAppsync.AuthorizationType.USER_POOL,
          userPoolConfig: { userPool: params.userPool },
        }
      : { authorizationType: awsAppsync.AuthorizationType.API_KEY };

    const domainConfig: awsAppsync.GraphqlApiProps['domainName'] = params.domainConfig
      ? {
          certificate: params.domainConfig.certificate,
          domainName: getDomain(params.domainConfig.subdomain, service.props),
        }
      : undefined;

    info('\n<< Loading GraphQL schema files >>');
    const loadedFiles = loadFilesSync(join(params.baseApiFolder, '..', '**', 'schema', '*.graphql'));
    const typeDefs = mergeTypeDefs(loadedFiles);
    const printedTypeDefs = print(typeDefs);
    const defPath = path.join(params.baseApiFolder, 'merged.graphql');
    writeFileSync(defPath, printedTypeDefs, { encoding: 'utf8', flag: 'w' });
    const schema = awsAppsync.SchemaFile.fromAsset(defPath);
    info('\n Merged Schema generated at: \n', defPath);

    this.api = new awsAppsync.GraphqlApi(this, 'Api', {
      name: getResourceName('', service.props),
      schema: schema,
      authorizationConfig: { defaultAuthorization },
      domainName: domainConfig,
      logConfig: {
        fieldLogLevel: awsAppsync.FieldLogLevel.ALL,
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
    new CfnOutput(this, 'Domain', { value: domainConfig?.domainName || this.api.graphqlUrl });
  }

  addDynamoTableDataSource = (tablePrefab: DynamoTablePrefab): awsAppsync.DynamoDbDataSource => {
    return this.api.addDynamoDbDataSource(tablePrefab.tableName, tablePrefab.table, {
      name: `${tablePrefab.tableName}TableDataSource`,
    });
  };

  addFunctionResolver = (params: FunctionResolverParams): void => {
    new awsAppsync.Resolver(this, getLogicalName('pipeline', params.fieldName), {
      api: this.api,
      typeName: params.typeName,
      fieldName: params.fieldName,
      pipelineConfig: [
        new awsAppsync.AppsyncFunction(this, getLogicalName('function', params.fieldName), {
          api: this.api,
          dataSource: params.dataSource,
          name: params.fieldName,
          code: AppSyncPrefab.bundleAppSyncResolver(`${params.baseApiFolder}/resolvers/${params.fieldName}.ts`),
          runtime: awsAppsync.FunctionRuntime.JS_1_0_0,
        }),
      ],
      code: awsAppsync.Code.fromAsset(`${__dirname}/resolvers/pipeline.js`),
      runtime: awsAppsync.FunctionRuntime.JS_1_0_0,
    });
  };

  static bundleAppSyncResolver = (entryPoint: string): awsAppsync.Code => {
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
    return awsAppsync.Code.fromInline(result.outputFiles[0].text);
  };
}
