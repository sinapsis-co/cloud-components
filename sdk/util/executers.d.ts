export declare const wait: (delay: number) => Promise<void>;
export declare const retrievableFunc: <T>(retryNumber: number, maxRetry: number, timeGap: number, fn: (...args: any[]) => Promise<T>, ...args: any[]) => Promise<T>;
