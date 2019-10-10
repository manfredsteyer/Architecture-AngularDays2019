import { Injectable } from '@angular/core';

export abstract class LogFormatter {
    abstract format(msg: string): string;
}

@Injectable()
export class DefaultFormatter implements LogFormatter {
    format(msg: string): string {
        return msg;
    }
}
