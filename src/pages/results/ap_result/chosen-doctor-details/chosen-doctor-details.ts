import { AppConfig } from './../../../../providers/services/app-config.service';
import { SharingService } from './../../../../providers/services/sharing-service';
import { AppointmentInfoService } from './../../../../providers/services/appointment-info-service';
import { Component } from '@angular/core';


@Component({
    selector: 'app-chosen-doctor-details',
    templateUrl: './chosen-doctor-details.html'
})

export class ChosenDoctorComponent {

    public AppConfig = AppConfig;
    public doc: any;
    imgPrePath: string = '../../assets/img/';
    constructor(private sharingService: SharingService, private appInfoService: AppointmentInfoService) { }

    ngOnInit() {
        let selectedAppointment = this.appInfoService.getAppointmentDetails() || this.sharingService.getParams('selectedAppointment') || {};
        this.doc = selectedAppointment.docDetails || {};
        this.doc.mapData = selectedAppointment.location;
    }
}