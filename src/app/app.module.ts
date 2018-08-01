import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LightswitchCompComponent } from './components/lightswitch-comp/lightswitch-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    LightswitchCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
