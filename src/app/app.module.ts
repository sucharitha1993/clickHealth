import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Routing Import
import { AppRoutingModule } from './app.routing';

//Project entry component import
import { AppComponent } from './app.component';

//custom component imports go here..
import { NavbarComponent } from './../pages/navbar/navbar.component';
import { FooterComponent } from './../pages/footer/footer.component';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { PartnersComponent } from './../pages/partners/partners.component';
import { ReviewComponent } from './../pages/review/review.component';
import { WelcomeComponent } from './../pages/welcome/welcome.component';
import { AppointmentsDiscountsComponent } from './../pages/appointments-discounts/appointments-discounts';
import { AboutDoctorsComponent } from './../pages/about-doctors/about-doctors.component';
//tab components
import { AppointmentsComponent } from './../pages/tabs/appointments/appointments.component';
import { HealthCheckupComponent } from './../pages/tabs/health-checkups/health-checkups.component';
import { DiscountCardsComponent } from './../pages/tabs/discount-cards/discount-cards.component';
import { GiftHealthComponent } from './../pages/tabs/gift-health/gift-health.component';
import { ServiceProvidersComponent } from './../pages/tabs/service-providers/service-providers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    WelcomeComponent,
    PartnersComponent,
    ReviewComponent,
    AppointmentsDiscountsComponent,
    AboutDoctorsComponent,
    //tab components
    AppointmentsComponent,
    HealthCheckupComponent,
    DiscountCardsComponent,
    GiftHealthComponent,
    ServiceProvidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
