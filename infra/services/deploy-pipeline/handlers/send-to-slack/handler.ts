import { SNSHandler } from 'aws-lambda';

export const handler: SNSHandler = async (event) => {
  // eslint-disable-next-line no-console
  event.Records.map((v) => console.log(JSON.stringify(v)));
};
