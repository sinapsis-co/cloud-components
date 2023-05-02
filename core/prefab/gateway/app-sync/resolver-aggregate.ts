import * as appsync from 'aws-cdk-lib/aws-appsync';
import { Construct } from 'constructs';
import * as esbuild from 'esbuild';

import { BaseDataSource } from 'aws-cdk-lib/aws-appsync';
import { getLogicalName } from 'common/naming/get-logical-name';
import { Service } from 'common/service';
import { DynamoTablePrefab } from 'prefab/storage/dynamo/table';
import { AppSyncPrefab } from '.';
import { FunctionResolver } from './types';

type Resolver = {
  typeName: 'Mutation' | 'Query' | 'Subscription';
  resolversPipeline?: { name: string; dataSource?: BaseDataSource }[];
};

export type AppSyncResolverAggregateParams<T> = {
  appSyncPrefab: AppSyncPrefab;
  baseApiFolder: string;
  tablePrefab: DynamoTablePrefab;
  resolvers: Record<MethodNames<T>, Resolver>;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type MethodNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];

export class AppSyncResolverAggregate<T> extends Construct {
  public readonly api: appsync.GraphqlApi;
  public readonly baseApiFolder: string;

  constructor(service: Service, params: AppSyncResolverAggregateParams<T>) {
    super(service, getLogicalName(AppSyncResolverAggregate.name));
    const { appSyncPrefab, baseApiFolder, resolvers, tablePrefab } = params;

    const dataSource = new appsync.DynamoDbDataSource(
      service,
      getLogicalName('dynamoDataSource', tablePrefab.tableName),
      { api: appSyncPrefab.api, table: tablePrefab.table, name: `${tablePrefab.tableName}TableDataSource` }
    );

    Object.keys(resolvers).map((r) => {
      const fieldName = r;
      const resolver = resolvers[r];
      const fnPipeline =
        resolver.resolversPipeline && resolver.resolversPipeline.length > 1
          ? resolver.resolversPipeline.map((rp) =>
              AppSyncResolverAggregate.functionResolver(service, {
                api: appSyncPrefab.api,
                baseApiFolder,
                dataSource: rp.dataSource || dataSource,
                name: rp.name,
              })
            )
          : [
              AppSyncResolverAggregate.functionResolver(service, {
                api: appSyncPrefab.api,
                dataSource,
                baseApiFolder,
                name: fieldName,
              }),
            ];

      // PipelineResolver
      new appsync.Resolver(service, getLogicalName('pipeline', fieldName), {
        api: appSyncPrefab.api,
        typeName: resolver.typeName,
        fieldName: fieldName,
        pipelineConfig: fnPipeline,
        code: appsync.Code.fromAsset(`${__dirname}/resolvers/pipeline.js`),
        runtime: appsync.FunctionRuntime.JS_1_0_0,
      });
    });
  }

  addDynamoTableDataSource = (tablePrefab: DynamoTablePrefab): appsync.DynamoDbDataSource => {
    return this.api.addDynamoDbDataSource(tablePrefab.tableName, tablePrefab.table, {
      name: `${tablePrefab.tableName}TableDataSource`,
    });
  };

  static functionResolver = (service: Service, params: FunctionResolver): appsync.AppsyncFunction => {
    return new appsync.AppsyncFunction(service, getLogicalName('function', params.name), {
      api: params.api,
      dataSource: params.dataSource,
      name: params.name,
      code: AppSyncResolverAggregate.bundleAppSyncResolver(`${params.baseApiFolder}/resolvers/${params.name}.ts`),
      runtime: appsync.FunctionRuntime.JS_1_0_0,
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
