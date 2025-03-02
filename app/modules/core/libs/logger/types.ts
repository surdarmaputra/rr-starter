export type LogPayload =
  | Error
  | Record<string, string | number | boolean>
  | unknown;

export interface Logger {
  logInfo(message: string, payload?: LogPayload): void;
  logError(message: string, payload?: LogPayload): void;
  logWarn(message: string, payload?: LogPayload): void;
  logDebug(message: string, payload?: LogPayload): void;
  logTrace(message: string, payload?: LogPayload): void;
}
