export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const levels: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const currentLevel = levels[process.env.CC_LOG_LEVEL || 'info'];

export const logger = (level: LogLevel) => {
  return (message: Record<string, any>) => {
    // eslint-disable-next-line no-console
    if (levels[level] >= currentLevel) console.log(message);
  };
};

export const debug = logger('debug');
export const info = logger('info');
export const warn = logger('warn');
export const error = logger('error');
