import { AppLitteralsConfig } from './../../../../providers/literals/app.literals';
import { SharingService } from './../../../../providers/services/sharing-service';
import { AppointmentInfoService } from './../../../../providers/services/appointments/appointment-info-service';
import { AppRegExpressionsConfig } from './../../../../providers/literals/app.regularExp';
import { AppointmentDataService } from './../../../../providers/services/appointments/appointment-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-ap-details',
    templateUrl: './ap_details.html'
})
export class BookAppointmentComponent implements OnInit {

    AppLitteralsConfig = AppLitteralsConfig;
    imgPrePath: string = '../../assets/img/';
    confirmAppointmentForm: FormGroup;
    selectedAppointment: any;

    constructor(private sharingService: SharingService, private router: Router, public formBuilder: FormBuilder, private apiSerives: AppointmentDataService, private appointmentInfo: AppointmentInfoService) {
    }

    ngOnInit() {
        this.initialiseConfirmAppointmentfields();
        let selectedAppointment = this.appointmentInfo.getAppointmentDetails() || this.sharingService.getParams('selectedAppointment');
        this.selectedAppointment = selectedAppointment.appointmentDetails;
    }

    initialiseConfirmAppointmentfields() {
        this.confirmAppointmentForm = this.formBuilder.group({
            "name": [null, Validators.required],
            "email": [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.email)])],
            "generate": [true],
            "mobile": [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.mobile)])],
            "reason": [null],
            "password":[null, Validators.required],
            "agreeing_to_tnc": [null, Validators.required]
        });
    }

    //to generate otp for booking appointment
    generateOTP() {
        let obj = {
            "generate": true,
            "email": this.confirmAppointmentForm.controls['email'].value,
            'mobile': this.confirmAppointmentForm.controls['mobile'].value,
            "name": this.confirmAppointmentForm.controls['name'].value,
            "reason": this.confirmAppointmentForm.controls['reason'].value,
            "agreeing_to_tnc": this.confirmAppointmentForm.controls['agreeing_to_tnc'].value
        }
        this.apiSerives.generateOtp(obj)
            .subscribe((res) => {
                if (res.status) {
                    res.data = res.data || [];
                    this.appointmentInfo.setOTP(res.data['0']);
                    this.sharingService.setParams('otp', res.data['0']);
                    this.router.navigateByUrl('main/ap_otp');
                }
            },
            (err) => {
                console.log(err);
            })
    }

    //Check if User Exists
    checkForUserExistence() {
        this.appointmentInfo.setUserDetails(this.confirmAppointmentForm.value);
        this.sharingService.setParams('healthSeeker', this.confirmAppointmentForm.value);
        let obj = {
            "email": this.confirmAppointmentForm.controls['email'].value,
            'mobile': this.confirmAppointmentForm.controls['mobile'].value,
        }
        this.apiSerives.checkUserExistence(obj)
            .subscribe(
            res => {
                if (res.existed)
                    this.router.navigateByUrl('main/ap_pwd');
                else
                    this.generateOTP();
            },
            err => {
                console.log('issue in check user Existence api call');
            })
    }

    navigateBack() {
        this.router.navigateByUrl('main/ap_result');
    }

    agreeTnC(e) {
        if (e.target.checked)
            this.confirmAppointmentForm.controls['agreeing_to_tnc'].setValue(e.target.checked)
        else
            this.confirmAppointmentForm.controls['agreeing_to_tnc'].setValue(null);
    }
}