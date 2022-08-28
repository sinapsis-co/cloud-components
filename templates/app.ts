/* eslint-disable no-console */
import { App } from 'aws-cdk-lib';
import { getGlobalProps } from '@sinapsis-co/cc-infra-v2/common/synth/get-global-props';
import { globalConstConfig, globalEnvConfig, globalDeployTargetConfig } from './config';

import { SupportServices } from './services/support';
import { BusinessServices } from './services/business';
import { FrontendServices } from './services/frontend';

try {
  const app = new App();
  const globalProps = getGlobalProps(app, globalConstConfig, globalEnvConfig, globalDeployTargetConfig);

  const supportServices = new SupportServices(app, globalProps);

  const services = new BusinessServices(app, globalProps, supportServices);

  new FrontendServices(app, globalProps, { ...supportServices, ...services });

  app.synth();
} catch (error: any) {
  console.log(`Synth Error: ${error.message}`);
  process.exit(1);
}
