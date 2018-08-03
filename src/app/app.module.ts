import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { LightswitchCompComponent } from './components/lightswitch-comp/lightswitch-comp.component';
import { DashboardHeroComponent } from './components/dashboard-hero/dashboard-hero.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BannerComponent } from './components/banner/banner.component';
import { TwainComponent } from './components/twain/twain.component';


@NgModule({
  declarations: [
    AppComponent,
    LightswitchCompComponent,
    DashboardHeroComponent,
    WelcomeComponent,
    BannerComponent,
    TwainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
