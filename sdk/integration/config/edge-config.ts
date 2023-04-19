import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { PlatformFault } from 'error';
import { Tracing } from 'tracing';

export const ssm = Tracing.captureIntegration(new SSMClient({ region: 'us-east-1' }));

export const getConfig = async <T>(): Promise<T> => {
  const Name: string = process.env.AWS_LAMBDA_FUNCTION_NAME?.split('us-east-1.')[1] as string;
  const cmd = async () => {
    const { Parameter } = await ssm.send(new GetParameterCommand({ Name }));
    if (!Parameter || !Parameter.Value) throw new PlatformFault({ code: 'FAULT_SSM_INVALID_PARAMETER' });
    const config: T = JSON.parse(Parameter.Value);
    return config;
  };
  return Tracing.capture('GetEdgeConfig', 'FAULT_SSM_GET_EDGE_CONFIG', Name, cmd);
};
