import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TvComponent } from './tv/tv.component';
import { SoundbarsComponent } from './soundbars/soundbars.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { WashingComponent } from './washing/washing.component';
import { WashingmachineComponent } from './washing/washingmachine/washingmachine.component';
import { OvenComponent } from './oven/oven.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [

  {path:'mobiles',component:MobilesComponent},
  {path: 'tv', component:TvComponent},
  {path: '',component:HomeComponent},
  {path: 'watch',component:WatchComponent},
  {path: 'bar',component:SoundbarsComponent},
  {path: 'frdg',component:RefrigeratorComponent},
  {path: 'wd',component:WashingComponent},
  {path: 'wama',component:WashingmachineComponent},
  {path: 'oven',component:OvenComponent},
  {path:'con',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
