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
            }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
