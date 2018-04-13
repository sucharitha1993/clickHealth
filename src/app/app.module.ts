import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Routing Import
import { AppRoutingModule } from './app.routing';

//Project entry component import
import { AppComponent } from './app.component';

//custom re-usable component imports go here..
import { NavbarComponent } from './../pages/navbar/navbar.component';
import { FooterComponent } from './../pages/footer/footer.component';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
//Landing pages
import { PartnersComponent } from './../pages/landing-pages/partners/partners.component';
import { ReviewComponent } from './../pages/landing-pages/review/review.component';
import { WelcomeComponent } from './../pages/landing-pages/welcome/welcome.component';
import { AppointmentsDiscountsComponent } from './../pages/landing-pages/appointments-discounts/appointments-discounts';
import { AboutDoctorsComponent } from './../pages/landing-pages/about-doctors/about-doctors.component';
//tab components
import { AppointmentsComponent } from './../pages/tabs/appointments/appointments.component';
import { HealthCheckupComponent } from './../pages/tabs/health-checkups/health-checkups.component';
import { DiscountCardsComponent } from './../pages/tabs/discount-cards/discount-cards.component';
import { GiftHealthComponent } from './../pages/tabs/gift-health/gift-health.component';
import { ServiceProvidersComponent } from './../pages/tabs/service-providers/service-providers.component';
//Search Result view components
import { HeaderComponent } from './../pages/header/header.component';
import { CategoryFiltersComponent } from './../pages/category-filters/category-filters.component';
import { AppointmentResultsComponent } from './../pages/results/appointment-results/appointment-results';
//Appontment Result sub components
import { DoctorDetailsComponent } from './../pages/results/appointment-results/doctor-details/doctor-details';
import { TimeSlotComponent } from './../pages/results/appointment-results/time-slot/time-slot';
//importing pipes
import { FilterPipe } from './../pipes/filter-pipe';

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
    ServiceProvidersComponent,
    //search Result view components
    HeaderComponent,
    CategoryFiltersComponent,
    AppointmentResultsComponent,
    //Appontment Result sub components
    DoctorDetailsComponent,
    TimeSlotComponent,
    //pipes
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
