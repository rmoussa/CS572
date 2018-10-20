import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbService } from './db.service';
import { OlympicsModule } from './olympics/olympics.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OlympicsModule,
    AppRoutingModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
