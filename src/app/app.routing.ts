import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { MainDashboardComponent } from './../pages/main-dashboard/main-dashboard';
//Appointments
import { AppointmentResultsComponent } from './../pages/results/appointment-results/appointment-results';
import { ConfirmAppointmentComponent } from './../pages/results/appointment-results/ap_confirm/ap_confirm';
import { AppointmentOTPComponent } from './../pages/results/appointment-results/ap_otp/ap_otp';
import { BookAppointmentComponent } from './../pages/results/appointment-results/ap_details/ap_details';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'dashboard', component: MainDashboardComponent,
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
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
