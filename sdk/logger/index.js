"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.warn = exports.info = exports.debug = exports.logger = void 0;
const levels = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
};
const currentLevel = levels[process.env.CC_LOG_LEVEL || 'info'];
const logger = (level) => {
    return (message) => {
        // eslint-disable-next-line no-console
        if (levels[level] >= currentLevel)
            console.log(message);
    };
};
exports.logger = logger;
exports.debug = (0, exports.logger)('debug');
exports.info = (0, exports.logger)('info');
exports.warn = (0, exports.logger)('warn');
exports.error = (0, exports.logger)('error');
