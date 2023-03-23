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
  throwInBatchException: () => void;
  addMeta: (newMeta: Record<string, any>) => void;
}

export type ReturnExceptionOutput = {
  statusCode: number;
  body: string;
  headers?: Record<string, string>;
};
