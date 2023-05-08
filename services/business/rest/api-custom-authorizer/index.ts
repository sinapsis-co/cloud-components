import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/api-function/api-aggregate';
import { BaseFunction } from '@sinapsis-co/cc-core/prefab/compute/function/base-function';

import { ingredientApi } from '@sinapsis-co/cc-services/business/rest/multi-user-api/catalog';
import { IngredientsStoreTable } from '@sinapsis-co/cc-services/business/rest/multi-user-api/store/table-ingredient';
import { GlobalCoordinator } from '@sinapsis-co/cc-services/config/config-type';
import { CdnApi } from '@sinapsis-co/cc-services/support/cdn-api';
import { EnvVpc } from '@sinapsis-co/cc-services/support/env-vpc';

class Dep extends ServiceDependencies {
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
      baseFunctionFolder: __dirname, // Won't work (Functions are in different sources in this example)
      cdnApiPrefab: deps.cdnApi.cdnApiPrefab,
      customAuthorizerHandler,
      tableBuilder: IngredientsStoreTable,
      handlers: {
        create: ingredientApi.create.definition,
        get: ingredientApi.get.definition,
        list: ingredientApi.list.definition,
        delete: ingredientApi.delete.definition,
        update: ingredientApi.update.definition,
      },
    });
  }
}
