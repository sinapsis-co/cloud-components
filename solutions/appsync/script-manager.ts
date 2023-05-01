/* eslint-disable no-console */
import { executeConfigCommand, executeOutputCommand, getCommandSignature } from '@sinapsis-co/cc-core/script';
import { readFileSync } from 'fs';
import { globalConstConfig, globalDeployTargetConfig, globalEnvConfig } from './config';
import { schemaBuilder } from './services/support/graphql-api/schema-builder';

(async () => {
  try {
    const op: string = process.argv[2];
    if (op === 'schema-gen') {
      await schemaBuilder();
      return;
    }
    const signature = getCommandSignature(op);
    if (signature === 'config') {
      if (op === 'deploy') await schemaBuilder();
      await executeConfigCommand(op)(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, process.argv);
    } else {
      const output = JSON.parse(readFileSync(`${__dirname}/cdk.out/output/${process.argv[3]}.json`).toString());

      await executeOutputCommand(op)(
        globalConstConfig,
        globalEnvConfig,
        globalDeployTargetConfig,
        output,
        process.argv
      );
    }
  } catch (error: any) {
    console.log(error.message);
  }
})();
