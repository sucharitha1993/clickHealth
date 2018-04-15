import { AppointmentDataService } from './../../../providers/services/appointment-data.service';
import { AppointmentInfoService } from './../../../providers/services/appointment-info-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-appointments',
    templateUrl: './appointments.component.html'
})
export class AppointmentsComponent implements OnInit {


    imgPrePath: string = '../../assets/img/';

    constructor(private router: Router, private apiServices: AppointmentDataService, private appointmentInfo: AppointmentInfoService) {
    }

    ngOnInit() {
    }

    onClose(reqObj) {
        this.apiServices.getDocList(reqObj)
            .subscribe((res) => {
                if (res.status) {
                    res.data = res.data || {};
                    this.appointmentInfo.setHospitals(res.data.hospitals);
                    this.appointmentInfo.setLocations(res.data.locations);
                    this.appointmentInfo.setClinicians(res.data.clinicians);
                    this.router.navigate(['/dashboard/ap_result']);
                }
            },
            error => {
                console.log('unable to load doctors');
            })
    }
}