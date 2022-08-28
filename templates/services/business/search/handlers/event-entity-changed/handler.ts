import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { BaseRepoEvent } from '../../../base-crud/repository/base';
import { searchSecret } from '../../catalog';
import { algoliaSyncEntity } from '../../platform/index-sync';

export const handler = eventHandler<BaseRepoEvent['created']>(async (event) => {
  const [entityName, operation] = event['detail-type'].split('.').slice(1);
  if (!entityName || !operation) throw new Error('Invalid entity');
  const algoliaConfig = await getSecret<searchSecret.algolia.Secret>(searchSecret.algolia.secretConfig);
  await algoliaSyncEntity(algoliaConfig, entityName, event.detail, operation);
});
