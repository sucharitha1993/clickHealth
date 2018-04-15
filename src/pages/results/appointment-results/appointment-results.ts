import { AppointmentDataService } from './../../../providers/services/appointment-data.service';
import { AppLitteralsConfig } from './../../../providers/literals/app.literals';
import { Component, OnInit } from '@angular/core';
import { AppointmentInfoService } from './../../../providers/services/appointment-info-service';

declare var $: any;
@Component({
    selector: 'app-appointment-results',
    templateUrl: './appointment-results.html'
})
export class AppointmentResultsComponent implements OnInit {

    imgPrePath: string = '../../assets/img/';
    medicalCenters: any = [];
    locations: any = [];
    docList: any = [];
    searchParams: any;

    constructor(private apiServices: AppointmentDataService, private appointmentInfo: AppointmentInfoService) {
    }

    ngOnInit() {
        this.getClinicians();
    }

    // to toggle Doctor details
    viewMore(doctor) {
        doctor.showDetails = doctor.showDetails == undefined ? true : !doctor.showDetails;
    }
    //to toggle book appoinments
    bookAppointment(doctor) {
        doctor.isBookAppointment = doctor.isBookAppointment == undefined ? true : !doctor.isBookAppointment;
    }
    //to get Clinicians
    getClinicians() {
        this.searchParams = this.appointmentInfo.getAppointmentSearchParams();
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
    //On close of Modal
    onClose(reqObj) {
        $("#modifyDialog").hide();
        $('.modal-backdrop').remove();        
        this.apiServices.getDocList(reqObj)
            .subscribe((res) => {
                if (res.status) {
                    res.data = res.data || {};
                    this.medicalCenters = res.data.hospitals;
                    this.locations = res.data.locations;
                    this.appointmentInfo.setClinicians(res.data.clinicians);
                    this.getClinicians();
                }
            },
            error => {
                console.log('unable to load doctors');
            })
    }
}
