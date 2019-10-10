import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { LoggerModule, LoggerConfig } from '@my/logger-lib';
import { CustomLogFormatter } from './custom-logformatter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule.forRoot({
      enableDebug: false,
      formatter: CustomLogFormatter
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
