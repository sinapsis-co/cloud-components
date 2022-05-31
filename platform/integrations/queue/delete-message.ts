import SQS from 'aws-sdk/clients/sqs';
const sqs = new SQS();

export const deleteMessage = async (receiptHandle: string, queueUrl: string): Promise<void> => {
  const params: SQS.DeleteMessageRequest = {
    QueueUrl: queueUrl,
    ReceiptHandle: receiptHandle,
  };
  await sqs.deleteMessage(params).promise();
};
