import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra/prefab/function/api-function/api-aggregate';
import { BaseFunction } from '@sinapsis-co/cc-infra/prefab/function/base-function';

import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { baseApi } from './catalog';

export type BaseCrudParams = GlobalServiceDependencies;

export class BaseCrud extends Service<GlobalProps, BaseCrudParams> {
  public readonly apiAggregate: ApiAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: BaseCrudParams) {
    super(scope, BaseCrud.name, globalProps, { params });

    const customAuthorizerHandler = new BaseFunction(this, {
      name: 'authorizer',
      baseFunctionFolder: __dirname,
      vpc: params.envVpc.vpcConstruct.vpc,
    }).lambdaFunction;

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'base',
      baseFunctionFolder: __dirname,
      cdnApi: this.props.cdnApi,
      customAuthorizerHandler,
      handlers: {
        create: baseApi.create.config,
        get: baseApi.get.config,
        list: baseApi.list.config,
        delete: baseApi.delete.config,
        update: baseApi.update.config,
      },
    });
  }
}
