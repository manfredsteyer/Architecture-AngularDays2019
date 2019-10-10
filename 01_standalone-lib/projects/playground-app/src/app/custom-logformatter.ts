import { LogFormatter } from "@my/logger-lib";



export class CustomLogFormatter implements LogFormatter {

    format(msg: string): string {
        return `${new Date().toISOString()} ${msg}`;
    }
}
