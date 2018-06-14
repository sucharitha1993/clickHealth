import { Toastr } from './../../../../providers/services/toastr.service';
import { LoaderService } from './../../../../providers/services/loader-service';
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

    constructor(public toastr: Toastr, public loader: LoaderService, public sharingService: SharingService, public router: Router, public apiServices: AppointmentDataService, public apInfoService: AppointmentInfoService) { }

    ngOnInit() {
        this.healthSeeker = this.apInfoService.getUserDetails() || this.sharingService.getParams('healthSeeker') || {};
        let selectedAppointment = this.apInfoService.getAppointmentDetails() || this.sharingService.getParams('selectedAppointment') || {};
        this.selectedAppointment = selectedAppointment.appointmentDetails;
    }

    //to verify password
    verifyPassword(pwd) {
        this.loader.showLoader();
        let obj = {
            'username' : this.healthSeeker.email,
            'password' : pwd
        }
        this.apiServices.checkForPwdAuthentication(obj)
            .subscribe(res => {
                this.loader.hideLoader();
                if (res.authenticated) {
                    this.isAuthenticated = true;
                    this.selectedAppointment.seeker_id = res.pk;
                    this.bookAppointment();
                } else {
                    this.isAuthenticated = false;
                    this.toastr.showToastr('Entered password is incorrect')
                }
            },
            error => {
                this.loader.hideLoader();
                this.toastr.showToastr('Unable to verify password');
            })
    }

    //To book Appointment for the authenticated user
    bookAppointment() {
        this.loader.showLoader();
        this.apiServices.bookAppointment(this.selectedAppointment)
            .subscribe(res => {
                this.loader.hideLoader();
                if (res.status) {
                    //this.apInfoService.setbookingDetails(res.data);
                    //this.sharingService.setParams('bookedAppointment', res.data)
                    this.router.navigateByUrl('/main/ap_confirm')
                } else {
                    this.toastr.showToastr('Unable to Book Appointment');
                }
            },
            error => {
                this.loader.hideLoader();
                this.toastr.showToastr('Unable to Book Appointment');
            })
    }
}