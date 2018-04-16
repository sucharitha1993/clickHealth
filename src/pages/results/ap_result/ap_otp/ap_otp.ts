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
    constructor(public router: Router, public apiServices: AppointmentDataService, public apInfoService: AppointmentInfoService) { }

    ngOnInit() { }

    verifyOTP(otp) {
        let selectedAppointment = this.apInfoService.getAppointmentDetails();
        let obj = selectedAppointment.appointmentDetails;
        if (otp == this.apInfoService.getOTP()) {
            this.apiServices.bookAppointment(obj)
                .subscribe(res => {
                    if (res.status) {
                        this.apInfoService.setbookingDetails(res.data);
                        this.router.navigateByUrl('/main/ap_confirm')
                    }
                },
                error => {
                    console.log(error);
                })
        } else {
            console.log('please enter correct otp');
        }
    }
}