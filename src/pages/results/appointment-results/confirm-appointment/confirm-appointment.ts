import { AppointmentInfoService } from './../../../../providers/services/appointment-info-service';
import { AppRegExpressionsConfig } from './../../../../providers/literals/app.regularExp';
import { AppointmentDataService } from './../../../../providers/services/appointment-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-confirm-appointment',
    templateUrl: './confirm-appointment.html'
})
export class ConfirmAppointmentComponent implements OnInit {


    imgPrePath: string = '../../assets/img/';
    confirmAppointmentForm: FormGroup;

    constructor(private router: Router, public formBuilder: FormBuilder, private apiSerives: AppointmentDataService, private appointmentInfo: AppointmentInfoService) {
    }

    ngOnInit() {
        this.initialiseConfirmAppointmentfields();
    }

    initialiseConfirmAppointmentfields() {
        this.confirmAppointmentForm = this.formBuilder.group({
            "name": [null],
            "email": [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.email)])],
            "generate": [true],
            "mobile": [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.mobile)])],
            "reason": [null],
            "agreeing_to_tnc": [null]
        });
    }

    //to generate otp for booking appointment
    generateOTP() {
        let obj = {
            "generate": true,
            "email": this.confirmAppointmentForm.controls['email'].value,
            'mobile': this.confirmAppointmentForm.controls['mobile'].value
        }
        this.apiSerives.generateOtp(obj)
            .subscribe((res) => {
                if (res.status) {
                    res.data = res.data || [];
                    this.appointmentInfo.setOTP(res.data['0']);
                    this.router.navigateByUrl('dashboard/ap_otp');
                }
            },
            (err) => {
                console.log(err);
            })
    }
}