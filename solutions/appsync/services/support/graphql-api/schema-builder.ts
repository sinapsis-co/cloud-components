/* eslint-disable @typescript-eslint/ban-types */
import 'reflect-metadata';

import { log } from 'console';
import path from 'path';
import { buildSchema } from 'type-graphql';
import { resolverSchemas } from '.';

export const schemaPath = path.join(__dirname, 'consolidated.graphql');

export const schemaBuilder = async (): Promise<void> => {
  log('<< Building GraphQL Schema >>');
  await buildSchema({
    resolvers: resolverSchemas,
    emitSchemaFile: schemaPath,
  });
};
