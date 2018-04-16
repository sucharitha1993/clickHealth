import { Observable } from 'rxjs/Rx';
import { AppointmentInfoService } from './../../../providers/services/appointment-info-service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppointmentDataService } from './../../../providers/services/appointment-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-appointments-search-from',
    templateUrl: './appointment-search-form.html'
})
export class AppointmentsSearchFormComponent implements OnInit {

    @Output() close: EventEmitter<any> = new EventEmitter();
    imgPrePath: string = '../../assets/img/';
    symptom: any = [];
    localities: any = [];
    cities: any = [];
    sessions: string[] = [
        "morning",
		"afternoon",
		"evening",
		"night"
    ];

    appointmentSearchForm: FormGroup;
    searchSymptom: any;
    searchLocation: any;
    selectedSession: any;
    
    constructor(private appointmentInfo: AppointmentInfoService, private datePipe: DatePipe, private apiServices: AppointmentDataService, public formBuilder: FormBuilder, private router: Router) {

    }

    ngOnInit() {
        this.initialiseAppointmentfields();
        this.startObserver();
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

    startObserver() {
        this.symptom = Observable.create((observer: any) => {
            this.apiServices.getAutoCompleteData('condition', this.searchSymptom)
                .subscribe((result: any) => {
                    observer.next(result.data);
                })
        });
        this.localities = Observable.create((observer: any) => {
            this.apiServices.getAutoCompleteData('location', this.searchLocation)
                .subscribe((result: any) => {
                    this.cities = this.appointmentInfo.getCities(result.data);
                    observer.next(result.data);
                })
        });
    }

    //navigate to Appointment Results
    searchAppointments() {
        let reqObj = {
            'from_date': this.datePipe.transform(this.appointmentSearchForm.controls['from_date'].value, 'yyyy-MM-dd'),
            'location': this.appointmentSearchForm.controls['location'].value,
            'location_type': this.appointmentSearchForm.controls['location_type'].value,
            'session': this.appointmentSearchForm.controls['session'].value,
            'symptom': this.appointmentSearchForm.controls['symptom'].value,
            'to_date': this.datePipe.transform(this.appointmentSearchForm.controls['to_date'].value, 'yyyy-MM-dd'),
        }
        let args = ['from_date', 'location', 'location_type', 'session', 'symptom', 'to_date'];
        this.appointmentInfo.setAppointmentSearchParams(reqObj);
        this.appointmentInfo.setLocalStorageParamsDynamically(args, reqObj);
        this.close.emit(reqObj);
    }

}