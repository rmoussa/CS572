import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MyvisibilityDirective } from './myvisibility.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MyvisibilityDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
