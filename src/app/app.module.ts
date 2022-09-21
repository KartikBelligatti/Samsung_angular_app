import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TvComponent } from './tv/tv.component';
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';
import { SoundbarsComponent } from './soundbars/soundbars.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { WashingComponent } from './washing/washing.component';
import { WashingmachineComponent } from './washing/washingmachine/washingmachine.component';
import { FiltersComponent } from './filters/filters.component';
import { AdsComponent } from './ads/ads.component';
import { CountComponent } from './count/count.component';
import { OvenComponent } from './oven/oven.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    MobilesComponent,
    TvComponent,
    HomeComponent,
    WatchComponent,
    SoundbarsComponent,
    RefrigeratorComponent,
    WashingComponent,
    WashingmachineComponent,
    FiltersComponent,
    AdsComponent,
    CountComponent,
    OvenComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
