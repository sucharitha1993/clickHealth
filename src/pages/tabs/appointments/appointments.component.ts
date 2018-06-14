import { Toastr } from './../../../providers/services/toastr.service';
import { LoaderService } from './../../../providers/services/loader-service';
import { AppointmentDataService } from './../../../providers/services/appointments/appointment-data.service';
import { AppointmentInfoService } from './../../../providers/services/appointments/appointment-info-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-appointments',
    templateUrl: './appointments.component.html'
})
export class AppointmentsComponent implements OnInit {


    imgPrePath: string = '../../assets/img/';

    constructor(public toastr: Toastr, public loader: LoaderService, private router: Router, private apiServices: AppointmentDataService, private appointmentInfo: AppointmentInfoService) {
    }

    ngOnInit() {
    }

    onClose(reqObj) {
        this.loader.showLoader();
        this.apiServices.getDocList(reqObj)
            .subscribe(res => {
                this.loader.hideLoader();
                if (res.status) {
                    res.data = res.data || {};
                    this.appointmentInfo.setHospitals(res.data.hospitals);
                    this.appointmentInfo.setLocations(res.data.locations);
                    this.appointmentInfo.setClinicians(res.data.clinicians);
                    this.router.navigate(['/main/ap_result']);
                } else {
                    this.toastr.showToastr('Unable to load doctors');
                }
            },
            error => {
                this.loader.hideLoader();
                this.toastr.showToastr('Unable to load doctors');                
            })
    }
}