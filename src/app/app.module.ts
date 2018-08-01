import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LightswitchCompComponent } from './components/lightswitch-comp/lightswitch-comp.component';
import { DashboardHeroComponent } from './components/dashboard-hero/dashboard-hero.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    LightswitchCompComponent,
    DashboardHeroComponent,
    WelcomeComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
