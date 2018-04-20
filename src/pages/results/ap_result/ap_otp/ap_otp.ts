import { SharingService } from './../../../../providers/services/sharing-service';
import { Router } from '@angular/router';
import { AppointmentDataService } from './../../../../providers/services/appointment-data.service';
import { AppointmentInfoService } from './../../../../providers/services/appointment-info-service';
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
    
    constructor(public sharingService: SharingService, public router: Router, public apiServices: AppointmentDataService, public apInfoService: AppointmentInfoService) { }

    ngOnInit() { 
        this.healthSeeker = this.apInfoService.getUserDetails() || this.sharingService.getParams('healthSeeker') || {};
        this.serverOtp = this.apInfoService.getOTP() || this.sharingService.getParams('otp');        
    }

    verifyOTP(otp) {
        let selectedAppointment = this.apInfoService.getAppointmentDetails() || this.sharingService.getParams('selectedAppointment') || {};
        let obj = selectedAppointment.appointmentDetails;
        if (otp == this.serverOtp) {
            this.apiServices.bookAppointment(obj)
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
        } else {
            this.otpErr = true;
            console.log('please enter correct otp');
        }
    }
}