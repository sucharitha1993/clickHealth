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
    isAuthenticated: boolean;

    constructor(public sharingService: SharingService, public router: Router, public apiServices: AppointmentDataService, public apInfoService: AppointmentInfoService) { }

    ngOnInit() { 
        let authentication =  this.sharingService.getParams('isAuthenticated');
        this.isAuthenticated = authentication.authenticated;
        this.healthSeeker = this.apInfoService.getUserDetails() || this.sharingService.getParams('healthSeeker') || {};
        this.serverOtp = this.apInfoService.getOTP() || this.sharingService.getParams('otp');      
    }

    //to verify otp and create user for verified user
    verifyOTP(otp) {
        if (otp == this.serverOtp) {
            this.router.navigateByUrl('main/ap_set_pwd');
        } else {
            this.otpErr = true;
        }
    }

}