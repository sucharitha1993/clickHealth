import { SharingService } from './../../../../providers/services/sharing-service';
import { Router } from '@angular/router';
import { AppointmentDataService } from './../../../../providers/services/appointments/appointment-data.service';
import { AppointmentInfoService } from './../../../../providers/services/appointments/appointment-info-service';
import { Component, Input } from '@angular/core';
import { Toastr } from './../../../../providers/services/toastr.service';
import { LoaderService } from './../../../../providers/services/loader-service';

@Component({
    selector: 'ap_set_pwd',
    templateUrl: './ap_set_pwd.html'
})

export class ApSetPasswordComponent {

    public pwd: any;
    public healthSeeker: any;
    public selectedAppointment: any;
    isAuthenticated: boolean;

    constructor(public toastr: Toastr, public loader: LoaderService, public sharingService: SharingService, public router: Router, public apiServices: AppointmentDataService, public apInfoService: AppointmentInfoService) { }

    ngOnInit() {
        let authentication =  this.sharingService.getParams('isAuthenticated');
        this.isAuthenticated = authentication.authenticated;
        this.healthSeeker = this.apInfoService.getUserDetails() || this.sharingService.getParams('healthSeeker') || {};
        let selectedAppointment = this.apInfoService.getAppointmentDetails() || this.sharingService.getParams('selectedAppointment') || {};
        this.selectedAppointment = selectedAppointment.appointmentDetails || {};
    }

    //to set password
    savePassword(pwd) {
        this.loader.showLoader();
        this.healthSeeker.password = pwd;
        this.apInfoService.setUserDetails(this.healthSeeker);
        this.sharingService.setParams('healthSeeker', this.healthSeeker);
        let obj = {
            'name': this.healthSeeker.name,
            'username': this.healthSeeker.email,
            'mobile': this.healthSeeker.mobile,
            'password': this.healthSeeker.password
        }
        this.apiServices.createUser(obj)
            .subscribe(res => {
                this.loader.hideLoader();
                if (res.authenticated) {
                    this.selectedAppointment.seeker_id = res.pk;
                    this.bookAppointment();
                } else {
                    this.toastr.showToastr('Unable to Create User');
                }
            },
            error => {
                this.loader.hideLoader();
                this.toastr.showToastr('Unable to Create User');
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