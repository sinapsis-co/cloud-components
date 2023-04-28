import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { log } from 'console';
import { print } from 'graphql';
import path, { join } from 'path';

console.log(path.join(__dirname));
console.log(path.join(__dirname, '..'));
console.log(path.join(__dirname, '..', '/**/*.graphql'));
console.log(path.join(__dirname, '..', '**', 'schema', '*.graphql'));

const loadedFiles = loadFilesSync(join(__dirname, '..', '**', 'schema', '*.graphql'));
const typeDefs = mergeTypeDefs(loadedFiles);
const printedTypeDefs = print(typeDefs);

log(printedTypeDefs);
