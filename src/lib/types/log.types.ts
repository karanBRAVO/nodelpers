export type TLogLevel = "default" | "info" | "warn" | "error";

export interface ILogOptions {
  level: TLogLevel;
  devOnly?: boolean; // Only log in non-production environments
  logPath?: string; // File path to save logs
}
