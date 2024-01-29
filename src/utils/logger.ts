import winston from "winston";

export enum HttpErrorCodes {
  OK = 200,
  BAD_REQUEST = 404,
  SERVER_ERROR = 500,
  NOT_FOUND = 400,
}

export default class WinstonLogger {
  public logger: winston.Logger;

  constructor() {
    this.logger = this.initializeLogger();
  }
  private initializeLogger(): winston.Logger {
    return winston.createLogger({
      level: "info",
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    });
  }
  getLogger() {
    return this.logger;
  }
}
