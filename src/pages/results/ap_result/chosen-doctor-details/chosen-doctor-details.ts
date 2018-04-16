import { AppointmentInfoService } from './../../../../providers/services/appointment-info-service';
import { Component } from '@angular/core';


@Component({
    selector: 'app-chosen-doctor-details',
    templateUrl: './chosen-doctor-details.html'
})

export class ChosenDoctorComponent {

    public doc: any;
    imgPrePath: string = '../../assets/img/';
    constructor(private appInfoService: AppointmentInfoService) { }

    ngOnInit() {
        let selectedAppointment = this.appInfoService.getAppointmentDetails() || {};
        this.doc = selectedAppointment.docDetails || {};
    }
}