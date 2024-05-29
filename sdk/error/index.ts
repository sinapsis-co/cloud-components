/* eslint-disable no-console */

import { APIGatewayProxyStructuredResultV2 } from 'aws-lambda';
import { PlatformErrorCodes, PlatformFaultCodes } from './catalog';
import { HandledException, HandledExceptionInput, ReturnExceptionOutput } from './types';

// ERROR
export class HandledError<CustomCodes extends string = PlatformErrorCodes> extends Error implements HandledException {
  statusCode: number;
  errorCode: CustomCodes;
  errorType: string;
  meta?: Record<string, any>;

  constructor({ code, statusCode, detail, meta }: HandledExceptionInput<CustomCodes>) {
    super(detail || code);
    this.errorType = 'ERROR';
    this.statusCode = statusCode || 400;
    this.errorCode = code;
    this.meta = meta || {};
  }
  public addMeta(newMeta: Record<string, any>): void {
    this.meta = { ...this.meta, ...newMeta };
  }
  private publish() {
    const { statusCode, errorCode, meta, errorType } = this;
    console.error({ statusCode, errorType, errorCode, errorMessage: this.message, meta });
  }
  public returnException(headers?: APIGatewayProxyStructuredResultV2['headers']): ReturnExceptionOutput {
    this.publish();
    const { statusCode, errorCode } = this;
    return { statusCode, headers, body: JSON.stringify({ errorCode, errorMessage: this.message }) };
  }
  public throwInBatchException(): void {
    this.publish();
    throw this;
  }
  public throwException(): void {
    // Here we don't publish because we are throwing the exception and will be printed by Lambda
    throw this;
  }
}

export const PlatformError = HandledError<PlatformErrorCodes>;
//FAULT
export class HandledFault<CustomCodes extends string = PlatformFaultCodes> extends Error implements HandledException {
  statusCode: number;
  errorCode: CustomCodes;
  errorType: string;
  meta?: Record<string, any>;

  constructor({ code, statusCode, detail, meta }: HandledExceptionInput<CustomCodes>) {
    super(detail || code);
    this.errorType = 'FAULT';
    this.statusCode = statusCode || 500;
    this.errorCode = code;
    this.meta = meta || {};
  }
  public addMeta(newMeta: Record<string, any>): void {
    this.meta = { ...this.meta, ...newMeta };
  }
  private publish() {
    const { statusCode, errorCode, errorType, meta } = this;
    console.error({
      statusCode,
      errorType,
      errorCode,
      errorMessage: this.message,
      meta: JSON.stringify(meta),
      stack: this.stack?.split('\n'),
    });
  }
  public returnException(headers?: APIGatewayProxyStructuredResultV2['headers']): ReturnExceptionOutput {
    this.publish();
    const { statusCode, errorCode } = this;
    return { statusCode, headers, body: JSON.stringify({ errorCode, errorMessage: 'InternalServerError' }) }; // Prevents leaking internal details
  }
  public throwInBatchException(): void {
    this.publish();
    throw this;
  }
  public throwException(): void {
    // Here we don't publish because we are throwing the exception and will be printed by Lambda
    throw this;
  }
}

export const PlatformFault = HandledFault<PlatformFaultCodes>;
