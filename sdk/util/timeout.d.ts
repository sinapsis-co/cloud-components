export type ResponseRecordsFunc<T> = (result: T) => number;
export declare const timeoutController: <T>(handlerPromise: Promise<T>) => Promise<T>;
