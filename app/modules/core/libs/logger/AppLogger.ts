import pino from 'pino';

import packageJson from '../../../../../package.json';
import type { Logger, LogPayload } from './types';

export class AppLogger implements Logger {
  private static instance: Logger;
  private logger: pino.Logger;

  private constructor() {
    this.logger = pino({
      formatters: {
        level: (label) => ({
          level: label,
        }),
      },
      level: process.env.LOG_LEVEL || 'info',
      mixin() {
        return {
          service: packageJson.name,
        };
      },
    });
  }

  public static getInstance() {
    if (!AppLogger.instance) {
      AppLogger.instance = new AppLogger();
    }
    return AppLogger.instance;
  }

  public logInfo(message: string, payload?: LogPayload) {
    this.logger.info(payload, message);
  }

  public logError(message: string, payload?: LogPayload) {
    this.logger.error(payload, message);
  }

  public logWarn(message: string, payload?: LogPayload) {
    this.logger.warn(payload, message);
  }

  public logDebug(message: string, payload?: LogPayload) {
    this.logger.debug(payload, message);
  }

  public logTrace(message: string, payload?: LogPayload) {
    this.logger.trace(payload, message);
  }
}
