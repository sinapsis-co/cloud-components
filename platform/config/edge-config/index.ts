import SSM from 'aws-sdk/clients/ssm';
const ssm = new SSM({ region: 'us-east-1' });

export const getConfig = async <T>(): Promise<T> => {
  const Name: string = process.env.AWS_LAMBDA_FUNCTION_NAME?.split('us-east-1.')[1] as string;
  const { Parameter } = await ssm.getParameter({ Name }).promise();
  if (!Parameter || !Parameter.Value) throw new Error('Missing parameter');
  const config: T = JSON.parse(Parameter.Value);
  return config;
};
