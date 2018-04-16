import { AppointmentInfoService } from './../../../providers/services/appointment-info-service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppointmentDataService } from './../../../providers/services/appointment-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-appointments-search-from',
    templateUrl: './appointment-search-form.html',
    styleUrls: ['ap_search_from.css']
})
export class AppointmentsSearchFormComponent implements OnInit {

    @Output() close: EventEmitter<any> = new EventEmitter();
    imgPrePath: string = '../../assets/img/';
    symptom: any = [];
    localities: any = [];
    cities: any = [];
    sessions: any = [
        {
            id: 'morning', name: 'Morning'
        },
        {
            id: 'afternoon', name: 'Afternoon'
        },
        {
            id: 'evening', name: 'Evening'
        },
        {
            id: 'night', name: 'Night'
        }
    ];

    appointmentSearchForm: FormGroup;

    constructor(private appointmentInfo: AppointmentInfoService, private datePipe: DatePipe, private apiServices: AppointmentDataService, public formBuilder: FormBuilder, private router: Router) {
    }

    ngOnInit() {
        this.initialiseAppointmentfields();
    }

    initialiseAppointmentfields() {
        this.appointmentSearchForm = this.formBuilder.group({
            "symptom": [null, Validators.required],
            "location_type": ['city'],
            "location": [null, Validators.required],
            "from_date": [null, Validators.required],
            "to_date": [null, Validators.required],
            "session": [null, Validators.required]
        });
    }

    //to search states on ngModelChange
    searchConditions(state) {
        this.apiServices.getAutoCompleteData('condition', state.query)
            .subscribe((result: any) => {
                this.symptom = result.data;
            });
    }

    //to search states on ngModelChange
    searchLocality(location) {
        this.apiServices.getAutoCompleteData('location', location)
            .subscribe((result: any) => {
                this.localities = result.data;
                for (var i = 0; i < this.localities.length; i++) {
                    this.cities.push(this.localities[i].city);
                }
            });
    }

    listFormatter = (data: any) => `<span>${data.name}</span>`;

    //navigate to Appointment Results
    searchAppointments() {
        let symptom = this.appointmentSearchForm.controls['symptom'].value || {};
        symptom = symptom.name || '';
        let location = this.appointmentSearchForm.controls['location'].value || {};
        location = location.name || '';
        let session = this.appointmentSearchForm.controls['session'].value || {};
        session = session.id || '';
        let reqObj = {
            'from_date': this.datePipe.transform(this.appointmentSearchForm.controls['from_date'].value, 'yyyy-MM-dd'),
            'location': location,
            'location_type': this.appointmentSearchForm.controls['location_type'].value,
            'session': session,
            'symptom': symptom,
            'to_date': this.datePipe.transform(this.appointmentSearchForm.controls['to_date'].value, 'yyyy-MM-dd'),
        }
         let args = ['from_date','location', 'location_type','session','symptom','to_date'];
        this.appointmentInfo.setAppointmentSearchParams(reqObj);
        this.appointmentInfo.setLocalStorageParamsDynamically(args,reqObj);
        this.close.emit(reqObj);
    }

}