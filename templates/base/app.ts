/* eslint-disable no-console */
import { getGlobalProps } from '@sinapsis-co/cc-infra-v2/common/synth/get-global-props';
import { App } from 'aws-cdk-lib';
import { globalConstConfig, globalDeployTargetConfig, globalEnvConfig } from './config';

import { BusinessServices } from './services/business';
import { FrontendServices } from './services/frontend';
import { SupportServices } from './services/support';

try {
  const app = new App();
  const globalProps = getGlobalProps(app, globalConstConfig, globalEnvConfig, globalDeployTargetConfig);

  const supportServices = new SupportServices(app, globalProps);

  const services = new BusinessServices(app, globalProps, supportServices);

  new FrontendServices(app, globalProps, { ...supportServices, ...services });

  app.synth();
} catch (error: any) {
  console.log(error);
  console.log(`Synth Error: ${error.message}`);
  process.exit(1);
}
