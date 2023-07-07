import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { PlatformFault } from 'error';
import { Tracing, traceableFunction } from 'tracing';

export const ssm = Tracing.captureIntegration(new SSMClient({ region: 'us-east-1' }));

export const getParameter = async <T = string>(parameterName: string, isPlainText?: boolean): Promise<T> => {
  const cmd = async () => {
    const { Parameter } = await ssm.send(new GetParameterCommand({ Name: parameterName }));
    if (!Parameter || !Parameter.Value) throw new PlatformFault({ code: 'FAULT_SSM_INVALID_PARAMETER' });
    if (isPlainText) return Parameter.Value as unknown as T;
    const config: T = JSON.parse(Parameter.Value);
    return config;
  };
  return traceableFunction('GetEdgeConfig', 'FAULT_SSM_GET_EDGE_CONFIG', parameterName, cmd);
};
