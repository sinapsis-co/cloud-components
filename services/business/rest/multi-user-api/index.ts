import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/api-function/api-aggregate';

import { GlobalCoordinator } from '@sinapsis-co/cc-services/config/config-type';
import { CdnApi } from '@sinapsis-co/cc-services/support/cdn-api';

import { QueueFunction } from '@sinapsis-co/cc-core/prefab/compute/function/queue-function';
import { ingredientApi } from './catalog';
import { IngredientsStoreTable } from './store/table-ingredient';

class Dep extends ServiceDependencies {
  @DepCheck()
  cdnApi: CdnApi;
}

export class Ingredient extends Service<GlobalCoordinator> {
  public apiAggregate: ApiAggregate;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Ingredient.name, Dep);
    coordinator.addService(this);
  }

  build(deps: Dep): void {
    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'ingredient',
      baseFunctionFolder: __dirname,
      cdnApiPrefab: deps.cdnApi.cdnApiPrefab,
      tableBuilder: IngredientsStoreTable,
      handlers: {
        create: ingredientApi.create.definition,
        get: ingredientApi.get.definition,
        list: ingredientApi.list.definition,
        delete: ingredientApi.delete.definition,
        update: ingredientApi.update.definition,
      },
    });

    new QueueFunction(this, { name: 'ingredient-queue' });
  }
}
