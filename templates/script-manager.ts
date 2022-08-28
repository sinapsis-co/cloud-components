/* eslint-disable no-console */
import { globalConstConfig, globalEnvConfig, globalDeployTargetConfig } from './config';
import { invoke } from '@sinapsis-co/cc-infra-v2/script';

(async () => {
  try {
    const op: string = process.argv[2];
    await invoke(op)(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, process.argv);
  } catch (error: any) {
    console.log(error.message);
  }
})();
