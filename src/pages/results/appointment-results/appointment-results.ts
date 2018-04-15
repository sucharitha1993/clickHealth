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
        let clinicianLength = Object.values(this.appointmentInfo.clinicians).length;
        let clinicians = clinicianLength > 0 ? this.appointmentInfo.getClinicians() : this.getDocList(this.searchParams);
        if (clinicianLength > 0) {
            this.formatClinicians(clinicians);
        }
    }
    //formatClinicians
    formatClinicians(clinicians) {
        this.docList = [];
        let args = ['from_date','location', 'location_type','session','symptom','to_date']
        this.searchParams = this.appointmentInfo.getAppointmentSearchParams() || this.appointmentInfo.getLocalStorageParamsDynamically(args);
        for (let key in clinicians) {
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
        this.getDocList(reqObj);
    }

    // to get Doc List
    getDocList(reqObj) {
        this.apiServices.getDocList(reqObj)
            .subscribe((res) => {
                if (res.status) {
                    res.data = res.data || {};
                    this.medicalCenters = res.data.hospitals;
                    this.locations = res.data.locations;
                    this.appointmentInfo.setClinicians(res.data.clinicians);
                    this.formatClinicians(res.data.clinicians);
                }
            },
            error => {
                console.log('unable to load doctors');
            })
    }
}
