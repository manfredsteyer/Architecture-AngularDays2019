import { LogFormatter } from "./log.formatter";
import { Type } from "@angular/core";

export type LogFormatterType = new () => LogFormatter;

export abstract class LoggerConfig {
    enableDebug: boolean;
    formatter?: LogFormatterType;
}
