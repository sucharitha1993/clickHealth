import { SharingService } from './../../../../providers/services/sharing-service';
import { Router } from '@angular/router';
import { AppointmentDataService } from './../../../../providers/services/appointments/appointment-data.service';
import { AppointmentInfoService } from './../../../../providers/services/appointments/appointment-info-service';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-ap_otp',
    templateUrl: './ap_otp.html'
})

export class AppointmentOTPComponent {

    public otp: any;
    public otpErr: any;
    public healthSeeker: any;
    public serverOtp: any;
    public selectedAppointment: any;
    
    constructor(public sharingService: SharingService, public router: Router, public apiServices: AppointmentDataService, public apInfoService: AppointmentInfoService) { }

    ngOnInit() { 
        this.healthSeeker = this.apInfoService.getUserDetails() || this.sharingService.getParams('healthSeeker') || {};
        this.serverOtp = this.apInfoService.getOTP() || this.sharingService.getParams('otp');   
        let selectedAppointment = this.apInfoService.getAppointmentDetails() || this.sharingService.getParams('selectedAppointment') || {};
        this.selectedAppointment = selectedAppointment.appointmentDetails || {};     
    }

    //to verify otp and create user for verified user
    verifyOTP(otp) {
        let obj = {
            'name': this.healthSeeker.name,
            'username': this.healthSeeker.email,
            'mobile': this.healthSeeker.mobile,
            'password': this.serverOtp
        }
        if (otp == this.serverOtp) {
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
        } else {
            this.otpErr = true;
            console.log('please enter correct otp');
        }
    }

    //to book Appointment
    bookAppointment() {
        this.apiServices.bookAppointment(this.selectedAppointment)
            .subscribe(res => {
                if (res.status) {
                    this.apInfoService.setbookingDetails(res.data);
                    this.sharingService.setParams('bookedAppointment', res.data)
                    this.router.navigateByUrl('/main/ap_confirm')
                }
            },
            error => {
                console.log(error);
            })
    }
}