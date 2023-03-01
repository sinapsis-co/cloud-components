/* eslint-disable */
import { getGlobalProps } from '@sinapsis-co/cc-infra-v2/common/synth/get-global-props';
import * as cdk from 'aws-cdk-lib';
import { globalConstConfig, globalDeployTargetConfig, globalEnvConfig } from '../../../config/index';

describe('Category - Service', () => {
  // mock app
  const app = new cdk.App({
    context: {
      env: 'dev',
      services: 'dev',
      deploy: 'dev',
      dnsShared: 'dev',
    },
  });
  const globalProps = getGlobalProps(app, globalConstConfig, globalEnvConfig, globalDeployTargetConfig);

  test('CloudFormation created', () => {
    // create stack
  });
});
