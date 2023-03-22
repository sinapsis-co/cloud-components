import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { HandledFault } from '../../../util/handled-exception';
const ssm = new SSMClient({ region: 'us-east-1' });

export const getConfig = async <T>(): Promise<T> => {
  const Name: string = process.env.AWS_LAMBDA_FUNCTION_NAME?.split('us-east-1.')[1] as string;
  const { Parameter } = await ssm.send(new GetParameterCommand({ Name }));
  if (!Parameter || !Parameter.Value) throw new HandledFault({ code: 'FAULT_SSM_INVALID_PARAMETER' });
  const config: T = JSON.parse(Parameter.Value);
  return config;
};
