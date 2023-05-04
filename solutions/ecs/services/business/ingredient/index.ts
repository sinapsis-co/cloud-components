import { Service } from '@sinapsis-co/cc-core/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/api-function/api-aggregate';
import { BaseFunction } from '@sinapsis-co/cc-core/prefab/compute/function/base-function';

import { DepCheck } from '@sinapsis-co/cc-core/common/coordinator';
import { GlobalCoordinator } from '../../../config/config-type';
import { CdnApi } from '../../support/cdn-api';
import { EnvVpc } from '../../support/env-vpc';
import { baseApi } from './catalog';
import { IngredientsTableBuilder } from './store/table-ingredient';

class Dep {
  @DepCheck()
  cdnApi: CdnApi;
  @DepCheck()
  envVpc: EnvVpc;
}

export class Ingredient extends Service<GlobalCoordinator> {
  public apiAggregate: ApiAggregate;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Ingredient.name, Dep);
    coordinator.addService(this);
  }

  build(deps: Dep): void {
    const customAuthorizerHandler = new BaseFunction(this, {
      name: 'authorizer',
      baseFunctionFolder: __dirname,
      vpc: deps.envVpc.vpcPrefab.vpc,
    }).lambdaFunction;

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'ingredient',
      baseFunctionFolder: __dirname,
      cdnApiPrefab: deps.cdnApi.cdnApiPrefab,
      customAuthorizerHandler,
      tableBuilder: IngredientsTableBuilder,
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
