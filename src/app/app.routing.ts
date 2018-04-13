import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { AppointmentResultsComponent } from './../pages/results/appointment-results/appointment-results';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard/ap_result', component: AppointmentResultsComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
