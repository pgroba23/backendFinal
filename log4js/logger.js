import log4js from 'log4js';

log4js.configure({
  appenders: {
    consola: { type: 'console' },
    archivoErrores: { type: 'file', filename: './log4js/error.log' },
    archivoWarning: { type: 'file', filename: './log4js/warn.log' },
    loggerConsola: {
      type: 'logLevelFilter',
      appender: 'consola',
      level: 'info',
    },
    loggerArchivoErrores: {
      type: 'logLevelFilter',
      appender: 'archivoErrores',
      level: 'error',
    },
    loggerArchivoWarning: {
      type: 'logLevelFilter',
      appender: 'archivoWarning',
      level: 'warn',
    },
  },
  categories: {
    default: {
      appenders: [
        'loggerConsola',
        'loggerArchivoErrores',
        'loggerArchivoWarning',
      ],
      level: 'all',
    },
    prod: {
      appenders: ['loggerArchivoErrores', 'loggerArchivoWarning'],
      level: 'all',
    },
  },
});

let logger = null;

if (process.env.NODE_ENV === 'production') {
  logger = log4js.getLogger('prod');
} else {
  logger = log4js.getLogger();
}

export default logger;
