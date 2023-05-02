import 'reflect-metadata';

import path from 'path';
import { buildSchema } from 'type-graphql';

import { log } from 'console';
import { IngredientResolver } from '../../business/menu/catalog/schema/ingredient';

export const schemaPath = path.join(__dirname, 'consolidated.graphql');

export const schemaBuilder = async () => {
  log('<< Building GraphQL Schema >>');
  await buildSchema({
    resolvers: [IngredientResolver],
    emitSchemaFile: schemaPath,
  });
};
