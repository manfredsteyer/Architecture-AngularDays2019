import { Injectable, Optional, Inject } from '@angular/core';
import { LoggerConfig } from './logger.config';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(
    @Optional() private config: LoggerConfig) {
  }

  debug(message: string): void {

    if (this.config && !this.config.enableDebug) {
      return;
    }

    // tslint:disable-next-line:no-console
    console.debug('DEBUG: ', message);
  }

  log(message: string): void {
    console.log('LOG: ', message);
  }

}
