export type Coords = { x: number; y: number };

export enum LogType {
  INFO = "info",
  ERROR = "error",
}

export type Log = {
  type: LogType;
  message: string;
};
