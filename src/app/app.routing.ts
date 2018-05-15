import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { MainDashboardComponent } from './../pages/main-dashboard/main-dashboard';
//Appointments
import { AppointmentResultsComponent } from './../pages/results/ap_result/ap_result';
import { ConfirmAppointmentComponent } from './../pages/results/ap_result/ap_confirm/ap_confirm';
import { AppointmentOTPComponent } from './../pages/results/ap_result/ap_otp/ap_otp';
import { BookAppointmentComponent } from './../pages/results/ap_result/ap_details/ap_details';
import { HCResultsComponent } from './../pages/results/hc_result/hc_result';
import { HCDetailsComponent } from './../pages/results/hc_result/hc-details/hc-details';
import { HCConfirmComponent } from './../pages/results/hc_result/hc-confirm/hc-confirm';
import { HCOTPComponent } from './../pages/results/hc_result/hc-otp/hc-otp';
//DC components
import { DCResultComponent } from './../pages/results/dc_result/dc_result';
import { GHResultComponent } from './../pages/results/gh_result/gh_result';
import { LoginComponent } from './../pages/login/login';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: DashboardComponent },
    {
        path: 'main', component: MainDashboardComponent,
        children: [
            {
                path: 'ap_result', component: AppointmentResultsComponent
            },
            {
                path: 'ap_details', component: BookAppointmentComponent
            },
            {
                path: 'ap_otp', component: AppointmentOTPComponent
            },
            {
                path: 'ap_confirm', component: ConfirmAppointmentComponent
            },
            {
                path: 'hc_result', component: HCResultsComponent
            },
            {
                path: 'dc_result', component: DCResultComponent
            },
            {
                path: 'hc_details', component: HCDetailsComponent
            },
            {
                path: 'hc_otp', component: HCOTPComponent
            },
            {
                path: 'hc_confirm', component: HCConfirmComponent
            }, {
                path: 'gh_result', component: GHResultComponent
            }, {
                path: 'login', component: LoginComponent
            }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
