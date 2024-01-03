import { APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

export type HandledExceptionInput<Codes> = {
  code: Codes;
  statusCode?: number;
  detail?: string;
  meta?: Record<string, any>;
};

export interface HandledExceptionOutput {
  statusCode: number;
  errorCode: string;
  errorMessage: string;
  errorType: string;
  meta?: string;
  stack?: string[];
}

export interface HandledException extends Error {
  statusCode: number;
  errorCode: string;
  errorType: string;
  meta?: Record<string, any>;
  returnException: (headers?: APIGatewayProxyStructuredResultV2['headers']) => ReturnExceptionOutput;
  throwException: () => void;
  throwInBatchException: () => void;
  addMeta: (newMeta: Record<string, any>) => void;
}

export type ReturnExceptionOutput = {
  statusCode: number;
  body: string;
  headers?: APIGatewayProxyStructuredResultV2['headers'];
};
