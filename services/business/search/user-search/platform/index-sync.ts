import algoliasearch from 'algoliasearch';

import { AlgoliaConfig, AlgoliaEntity } from '../entities/algolia';

export const algoliaSyncEntity = async (
  algoliaConfig: AlgoliaConfig,
  entityName: string,
  entity: AlgoliaEntity,
  operation: string
): Promise<void> => {
  const { ALGOLIA_API_KEY, ALGOLIA_APPLICATION_ID } = algoliaConfig;
  const client = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY);
  const index = client.initIndex(`${process.env.ENV_NAME}_${entityName}`);

  if (operation === 'deleted') {
    await index.deleteObject(entity.id).catch((e) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(e.message));
      throw e;
    });
  } else {
    await index.saveObject({ objectID: entity.id, ...entity }, { autoGenerateObjectIDIfNotExist: false }).catch((e) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(e.message));
      throw e;
    });
  }
};
