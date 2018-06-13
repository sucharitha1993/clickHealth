import { SharingService } from './../../../../providers/services/sharing-service';
import { Router } from '@angular/router';
import { AppointmentDataService } from './../../../../providers/services/appointments/appointment-data.service';
import { AppointmentInfoService } from './../../../../providers/services/appointments/appointment-info-service';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'ap_set_pwd',
    templateUrl: './ap_set_pwd.html'
})

export class ApSetPasswordComponent {

    public pwd: any;
    public healthSeeker: any;
    public selectedAppointment: any;

    constructor(public sharingService: SharingService, public router: Router, public apiServices: AppointmentDataService, public apInfoService: AppointmentInfoService) { }

    ngOnInit() {
        this.healthSeeker = this.apInfoService.getUserDetails() || this.sharingService.getParams('healthSeeker') || {};
        let selectedAppointment = this.apInfoService.getAppointmentDetails() || this.sharingService.getParams('selectedAppointment') || {};
        this.selectedAppointment = selectedAppointment.appointmentDetails || {};
    }

    //to set password
    savePassword(pwd) {
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
                if (res.authenticated) {
                    this.selectedAppointment.seeker_id = res.pk;
                    this.bookAppointment();
                } else {
                    console.log('user creation failed');
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