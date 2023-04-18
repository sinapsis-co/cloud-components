/* eslint-disable no-console */
import { invoke } from '@sinapsis-co/cc-core/script';
import { globalConstConfig, globalDeployTargetConfig, globalEnvConfig } from './config';

(async () => {
  try {
    const op: string = process.argv[2];
    await invoke(op)(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, process.argv);
  } catch (error: any) {
    console.log(error.message);
  }
})();
