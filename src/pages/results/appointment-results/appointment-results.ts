import { AppLitteralsConfig } from './../../../providers/literals/app.literals';
import { Component, OnInit } from '@angular/core';
import { AppointmentInfoService } from './../../../providers/services/appointment-info-service';

@Component({
    selector: 'app-appointment-results',
    templateUrl: './appointment-results.html'
})
export class AppointmentResultsComponent implements OnInit {

    imgPrePath: string = '../../assets/img/';
    doctorDetails: Object[] = AppLitteralsConfig.doctorDetails;
    docList: any = [];

    constructor(private appointmentInfo: AppointmentInfoService) {
    }

    ngOnInit() {
        let clinicians = this.appointmentInfo.getClinicians();
        for (var key in clinicians) {
            if (clinicians.hasOwnProperty(key)) {
                this.docList.push({
                    "data": clinicians[key],
                    "name": key
                })
            }
        }
    }

    // to toggle Doctor details
    viewMore(doctor) {
        doctor.showDetails = doctor.showDetails == undefined ? true : !doctor.showDetails;
    }
    //to toggle book appoinments
    bookAppointment(doctor) {
        doctor.isBookAppointment = doctor.isBookAppointment == undefined ? true : !doctor.isBookAppointment;
    }
}
