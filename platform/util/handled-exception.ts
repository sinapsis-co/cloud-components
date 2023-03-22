/* eslint-disable no-console */

export type FaultCodes =
  | 'FAULT_UNHANDLED'
  | 'FAULT_TIMEOUT'
  | 'FAULT_S3_OPERATION'
  | 'FAULT_TS_WRITE'
  | 'FAULT_NOT_MISSING_TEMPLATE'
  | 'FAULT_SM_MISSING_SECRET'
  | 'FAULT_SSM_INVALID_PARAMETER'
  | 'FAULT_COG_INVALID_POOL_ID'
  | 'FAULT_COG_INVALID_CLIENT_POOL'
  | 'FAULT_COG_INVALID_SIGN_IN'
  | 'FAULT_COG_INVALID_SIGN_UP'
  | 'FAULT_DYN_CHECK_ITEM_EXISTS'
  | 'FAULT_DYN_LIST_ITEM'
  | 'FAULT_DYN_GET_ITEM'
  | 'FAULT_DYN_PUT_ITEM'
  | 'FAULT_DYN_CREATE_ITEM'
  | 'FAULT_DYN_UPDATE_ITEM'
  | 'FAULT_DYN_DELETE_ITEM'
  | 'FAULT_DYN_SCAN_TABLE'
  | 'FAULT_DYN_QUERY_TABLE'
  | 'FAULT_DYN_BATCH_GET_ITEM'
  | 'FAULT_DYN_SOFT_DELETE_ITEM'
  | 'FAULT_DYN_RECOVER_ITEM'
  | 'FAULT_DYN_BATCH_CREATE_ITEM';

export type ErrorCodes =
  | 'ERROR_ITEM_NOT_FOUND'
  | 'ERROR_BODY_VALIDATION'
  | 'ERROR_MALFORMED_BODY'
  | 'ERROR_UNAUTHORIZED';

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

export interface HandledException {
  statusCode: number;
  errorCode: string;
  errorType: string;
  meta?: Record<string, any>;
  returnException: (headers?: Record<string, string>) => ReturnExceptionOutput;
  throwException: () => void;
}

type ReturnExceptionOutput = {
  statusCode: number;
  body: string;
  headers?: Record<string, string>;
};

// ERROR
export class HandledError extends Error implements HandledException {
  statusCode: number;
  errorCode: string;
  errorType: string;
  meta?: Record<string, any>;

  constructor({ code, statusCode = 400, detail, meta }: HandledExceptionInput<ErrorCodes>) {
    super(detail || code);
    this.errorType = 'ERROR';
    this.statusCode = statusCode;
    this.errorCode = code;
    this.meta = meta || {};
  }
  public returnException(headers?: Record<string, string>): ReturnExceptionOutput {
    const { statusCode, errorCode, meta, errorType } = this;
    console.error({ statusCode, errorType, errorCode, errorMessage: this.message, meta });
    return { statusCode, headers, body: JSON.stringify({ errorCode, errorMessage: this.message }) };
  }
  public throwException(): void {
    throw this;
  }
}

//FAULT
export class HandledFault extends Error implements HandledException {
  statusCode: number;
  errorCode: string;
  errorType: string;
  meta?: Record<string, any>;

  constructor({ code, statusCode = 500, detail, meta }: HandledExceptionInput<FaultCodes>) {
    super(detail || code);
    this.errorType = 'FAULT';
    this.statusCode = statusCode;
    this.errorCode = code;
    this.meta = meta || {};
  }
  public returnException(headers?: Record<string, string>): ReturnExceptionOutput {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { statusCode, errorCode, message, name, ...att } = this;
    console.error({
      statusCode,
      errorCode,
      ...att,
      errorMessage: this.message,
      stack: this.stack?.split('\n'),
    });
    return { statusCode, headers, body: JSON.stringify({ errorCode, errorMessage: 'InternalServerError' }) }; // Prevents leaking internal details
  }
  public throwException(): void {
    throw this;
  }
}
