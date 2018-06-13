import { SharingService } from './../../../../providers/services/sharing-service';
import { Router } from '@angular/router';
import { AppointmentDataService } from './../../../../providers/services/appointments/appointment-data.service';
import { AppointmentInfoService } from './../../../../providers/services/appointments/appointment-info-service';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-ap_pwd',
    templateUrl: './ap_pwd.html'
})

export class ApPasswordComponent {

    public pwd: any;
    public healthSeeker: any;
    public isAuthenticated: boolean = true;
    public selectedAppointment: any;

    constructor(public sharingService: SharingService, public router: Router, public apiServices: AppointmentDataService, public apInfoService: AppointmentInfoService) { }

    ngOnInit() {
        this.healthSeeker = this.apInfoService.getUserDetails() || this.sharingService.getParams('healthSeeker') || {};
        let selectedAppointment = this.apInfoService.getAppointmentDetails() || this.sharingService.getParams('selectedAppointment') || {};
        this.selectedAppointment = selectedAppointment.appointmentDetails;
    }

    //to verify password
    verifyPassword(pwd) {
        let obj = {
            'username' : this.healthSeeker.email,
            'password' : pwd
        }
        this.apiServices.checkForPwdAuthentication(obj)
            .subscribe(res => {
                if (res.authenticated) {
                    this.isAuthenticated = true;
                    this.selectedAppointment.seeker_id = res.pk;
                    this.bookAppointment();
                } else {
                    this.isAuthenticated = false;
                }
            },
            error => {
                console.log(error);
            })
    }

    //To book Appointment for the authenticated user
    bookAppointment() {
        this.apiServices.bookAppointment(this.selectedAppointment)
            .subscribe(res => {
                if (res.status) {
                    //this.apInfoService.setbookingDetails(res.data);
                    //this.sharingService.setParams('bookedAppointment', res.data)
                    this.router.navigateByUrl('/main/ap_confirm')
                }
            },
            error => {
                console.log(error);
            })
    }
}