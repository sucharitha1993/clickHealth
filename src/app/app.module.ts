
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

//Routing Import
import { AppRoutingModule } from './app.routing';

//Project entry component import
import { AppComponent } from './app.component';

//custom re-usable component imports go here..
import { NavbarComponent } from './../pages/navbar/navbar.component';
import { FooterComponent } from './../pages/footer/footer.component';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { MainDashboardComponent } from './../pages/main-dashboard/main-dashboard';

//Landing pages
import { PartnersComponent } from './../pages/landing-pages/partners/partners.component';
import { ReviewComponent } from './../pages/landing-pages/review/review.component';
import { WelcomeComponent } from './../pages/landing-pages/welcome/welcome.component';
import { AppointmentsDiscountsComponent } from './../pages/landing-pages/appointments-discounts/appointments-discounts';
import { AboutDoctorsComponent } from './../pages/landing-pages/about-doctors/about-doctors.component';
//tab components
import { AppointmentsComponent } from './../pages/tabs/appointments/appointments.component';
import { AppointmentsSearchFormComponent } from './../pages/tabs/appointment-search-form/appointment-search-form';
import { HealthCheckupComponent } from './../pages/tabs/health-checkups/health-checkups.component';
import { DiscountCardsComponent } from './../pages/tabs/discount-cards/discount-cards.component';
import { GiftHealthComponent } from './../pages/tabs/gift-health/gift-health.component';
import { ServiceProvidersComponent } from './../pages/tabs/service-providers/service-providers.component';
//Search Result view components
import { HeaderComponent } from './../pages/header/header.component';
import { AppointmentResultsComponent } from './../pages/results/ap_result/ap_result';
import { HCResultsComponent } from './../pages/results/hc_result/hc_result';
import { BookAppointmentComponent } from './../pages/results/ap_result/ap_details/ap_details';
import { AppointmentOTPComponent } from './../pages/results/ap_result/ap_otp/ap_otp';
import { ConfirmAppointmentComponent } from './../pages/results/ap_result/ap_confirm/ap_confirm';
import { ChosenDoctorComponent } from './../pages/results/ap_result/chosen-doctor-details/chosen-doctor-details';

//Appontment Result sub components
import { DoctorDetailsComponent } from './../pages/results/ap_result/doctor-details/doctor-details';
import { TimeSlotComponent } from './../pages/results/ap_result/time-slot/time-slot';
//importing pipes
import { FilterPipe } from './../pipes/filter-pipe';
import { SafeHtmlPipe } from './../pipes/safe-html.pipe';
import { DatePipe } from '@angular/common';
//importing Directive
import { DatePickerDirective } from './../providers/directives/date-picker-directive';
//importing Services
import { AppointmentDataService } from './../providers/services/appointment-data.service';
import { AppointmentInfoService } from './../providers/services/appointment-info-service';
import { SharingService } from './../providers/services/sharing-service';

//importing third party modules
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
//Feature Components
import { MapComponent } from './../pages/feature/map/map';
import { CategoryFiltersComponent } from './../pages/feature/category-filters/category-filters.component';

@NgModule({
  declarations: [
    MainDashboardComponent,
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
    AppointmentsSearchFormComponent,
    HealthCheckupComponent,
    DiscountCardsComponent,
    GiftHealthComponent,
    ServiceProvidersComponent,
    //search Result view components
    HeaderComponent,
    CategoryFiltersComponent,
    AppointmentResultsComponent,
    BookAppointmentComponent,
    ConfirmAppointmentComponent,
    AppointmentOTPComponent,
    ChosenDoctorComponent,
    HCResultsComponent,
    //Appontment Result sub components
    DoctorDetailsComponent,
    TimeSlotComponent,
    //pipes
    FilterPipe,
    SafeHtmlPipe,
    //Directives
    DatePickerDirective,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    //third party
    Ng2CarouselamosModule,
    TypeaheadModule.forRoot()
  ],
  providers: [
    AppointmentDataService,
    AppointmentInfoService,
    SharingService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
