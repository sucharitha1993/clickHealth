import { AppointmentInfoService } from './../../../../providers/services/appointment-info-service';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-ap_otp',
    templateUrl: './ap_otp.html'
})

export class AppointmentOTPComponent {

    public otp: any;
    constructor(public apInfoService: AppointmentInfoService) { }

    ngOnInit() { }

    verifyOTP(otp) {
        if (otp == this.apInfoService.getOTP()) {

        } else {
            console.log('please enter correct otp');
        }
    }
}