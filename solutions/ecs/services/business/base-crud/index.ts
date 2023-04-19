import { Service } from '@sinapsis-co/cc-core/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/api-function/api-aggregate';
import { BaseFunction } from '@sinapsis-co/cc-core/prefab/compute/function/base-function';

import { GlobalCoordinator } from '../../../config/config-type';
import { CdnApi } from '../../support/cdn-api';
import { EnvVpc } from '../../support/env-vpc';
import { baseApi } from './catalog';
import { baseTableBuilder } from './repository/base-table';

type Deps = {
  cdnApi: CdnApi;
  envVpc: EnvVpc;
};
const depsNames: Array<keyof Deps> = ['cdnApi', 'envVpc'];
export class BaseCrud extends Service<GlobalCoordinator> {
  public apiAggregate: ApiAggregate;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, BaseCrud.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    const customAuthorizerHandler = new BaseFunction(this, {
      name: 'authorizer',
      baseFunctionFolder: __dirname,
      vpc: deps.envVpc.vpcPrefab.vpc,
    }).lambdaFunction;

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'base',
      baseFunctionFolder: __dirname,
      cdnApiPrefab: deps.cdnApi.cdnApiPrefab,
      customAuthorizerHandler,
      tableBuilder: baseTableBuilder,
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
