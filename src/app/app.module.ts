import { Toastr } from './../providers/services/toastr.service';
import { LoginComponent } from './../pages/login/login';
import { LoaderService } from './../providers/services/loader-service';
import { CaroselService } from './../providers/services/carosel-service';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//Routing Import
import { AppRoutingModule } from './app.routing';

//Project entry component import
import { AppComponent } from './app.component';

//custom component imports go here..
import { NavbarComponent } from './../pages/navbar/navbar.component';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { MainDashboardComponent } from './../pages/main-dashboard/main-dashboard';
// Landing Template
import { LandingTemplate } from './../pages/landing-template/landing-template';

//tab components
import { AppointmentsComponent } from './../pages/tabs/appointments/appointments.component';
import { HealthCheckupComponent } from './../pages/tabs/health-checkups/health-checkups.component';
import { DiscountCardsComponent } from './../pages/tabs/discount-cards/discount-cards.component';
import { GiftHealthComponent } from './../pages/tabs/gift-health/gift-health.component';
import { ServiceProvidersComponent } from './../pages/tabs/service-providers/service-providers.component';
//Search Result view components
import { AppointmentResultsComponent } from './../pages/results/ap_result/ap_result';
import { HCResultsComponent } from './../pages/results/hc_result/hc_result';
import { BookAppointmentComponent } from './../pages/results/ap_result/ap_details/ap_details';
import { AppointmentOTPComponent } from './../pages/results/ap_result/ap_otp/ap_otp';
import { ConfirmAppointmentComponent } from './../pages/results/ap_result/ap_confirm/ap_confirm';
import { ChosenDoctorComponent } from './../pages/results/ap_result/chosen-doctor-details/chosen-doctor-details';
import { HCToggleDetailsComponent } from './../pages/results/hc_result/hc-toggle-details/hc-toggle-details';
import { HCModalComponent } from './../pages/results/hc_result/hc-modal/hc-modal';
import { HCDetailsComponent } from './../pages/results/hc_result/hc-details/hc-details';
import { HCConfirmComponent } from './../pages/results/hc_result/hc-confirm/hc-confirm';
import { HCOTPComponent } from './../pages/results/hc_result/hc-otp/hc-otp';
import { HCCategoryFiltersComponent } from './../pages/feature/hc-category-filters/category-filters.component';

//DC components
import { DCResultComponent } from './../pages/results/dc_result/dc_result';
// GH components
import { GHResultComponent } from './../pages/results/gh_result/gh_result';

//Appontment Result sub components
import { DoctorDetailsComponent } from './../pages/results/ap_result/doctor-details/doctor-details';
import { TimeSlotComponent } from './../pages/results/ap_result/time-slot/time-slot';
//importing pipes
import { FilterPipe } from './../pipes/filter-pipe';
import { SafeHtmlPipe } from './../pipes/safe-html.pipe';
import { DatePipe } from '@angular/common';
import { CategoryFilterPipe } from './../pipes/category-filter-pipe';
import { SortByPipe } from './../pipes/sortBy-pipe';
import { ToINRCurrencyFormat } from './../pipes/currency-pipe';

//importing Directive
import { DatePickerDirective } from './../providers/directives/date-picker-directive';
//importing Services
import { AppointmentDataService } from './../providers/services/appointments/appointment-data.service';
import { AppointmentInfoService } from './../providers/services/appointments/appointment-info-service';
import { SharingService } from './../providers/services/sharing-service';
import { HCDataService } from './../providers/services/health-checkups/hc-data-service';
import { HCInfoService } from './../providers/services/health-checkups/hc-info-service';

//importing third party modules
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
//Feature Components
import { MapComponent } from './../pages/feature/map/map';
import { HeaderComponent } from './../pages/feature/header/header.component';
import { FooterComponent } from './../pages/feature/footer/footer.component';
import { ApSearchFormComponent } from './../pages/feature/ap-search-form/ap-search-form';
import { HCSearchFormComponent } from './../pages/feature/hc-search-form/hc-search-form';
import { CategoryFiltersComponent } from './../pages/feature/category-filters/category-filters.component';

//Ngx Pagintor Module
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxCarouselModule } from 'ngx-carousel'
import { TopSearchSpecialists } from './../pages/tabs/top-specialists/top-specialists';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@NgModule({
  declarations: [
    LoginComponent,
    MainDashboardComponent,
    AppComponent,
    LandingTemplate,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    //tab components
    AppointmentsComponent,
    ApSearchFormComponent,
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
    HCToggleDetailsComponent,
    HCSearchFormComponent,
    HCModalComponent,
    HCDetailsComponent,
    HCOTPComponent,
    HCConfirmComponent,
    //Appontment Result sub components
    DoctorDetailsComponent,
    TimeSlotComponent,
    //pipes
    FilterPipe,
    SafeHtmlPipe,
    CategoryFilterPipe,
    SortByPipe,
    ToINRCurrencyFormat,
    //Directives
    DatePickerDirective,
    MapComponent,
    //DC components
    DCResultComponent,
    TopSearchSpecialists,
    //GH 
    GHResultComponent,
    HCCategoryFiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    //third party
    Ng2CarouselamosModule,
    TypeaheadModule.forRoot(),
    //Paginator Module
    NgxPaginationModule,
    NgxCarouselModule,
    Ng2AutoCompleteModule
  ],
  providers: [
    AppointmentDataService,
    AppointmentInfoService,
    SharingService,
    DatePipe,
    CaroselService,
    LoaderService,
    HCDataService,
    HCInfoService,
    Toastr
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
