export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export declare const logger: (level: LogLevel) => (message: Record<string, any>) => void;
export declare const debug: (message: Record<string, any>) => void;
export declare const info: (message: Record<string, any>) => void;
export declare const warn: (message: Record<string, any>) => void;
export declare const error: (message: Record<string, any>) => void;
