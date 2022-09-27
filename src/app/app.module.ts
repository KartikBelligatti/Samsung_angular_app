import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

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
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { PaypalComponent } from './paypal/paypal.component';
import { NetbankingComponent } from './netbanking/netbanking.component';

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
    ContactusComponent,
    ProductdetailsComponent,
    LoginComponent,
    RegisterComponent,
    CartItemsComponent,
    UsersComponent,
    DashboardComponent,
    PaymentComponent,
    CreditcardComponent,
    PaypalComponent,
    NetbankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
