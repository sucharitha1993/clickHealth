import { SharingService } from './../../../providers/services/sharing-service';
import { Observable } from 'rxjs/Rx';
import { AppointmentInfoService } from './../../../providers/services/appointments/appointment-info-service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppointmentDataService } from './../../../providers/services/appointments/appointment-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

declare var google: any;

@Component({
    selector: 'app-appointments-search-from',
    templateUrl: './ap-search-form.html'
})
export class ApSearchFormComponent implements OnInit {

    @Output() close: EventEmitter<any> = new EventEmitter();
    @Input('isModal')
    isModal: boolean;

    imgPrePath: string = '../../assets/img/';
    symptom: any = [];
    localities: any = [];
    cities: any = [];
    sessions: string[] = [
        "morning",
        "afternoon",
        "evening"
    ];

    appointmentSearchForm: FormGroup;
    searchSymptom: any;
    searchLocation: any;
    selectedSession: any;
    searchParams: any;
    lat: any;
    long: any;
    constructor(private sharingService: SharingService, private appointmentInfo: AppointmentInfoService, private datePipe: DatePipe, private apiServices: AppointmentDataService, public formBuilder: FormBuilder, private router: Router) {

    }

    ngOnInit() {
        this.initialiseAppointmentfields(this.isModal);
        this.startObserver();
    }

    initialiseAppointmentfields(isModal) {
        if (isModal) {
            this.searchParams = this.appointmentInfo.getAppointmentSearchParams() || this.sharingService.getParams('appointments') || {};
        }
        let searchParams = this.searchParams || {};
        //if(searchParams.from_date)
       // searchParams.from_date = new Date(searchParams.from_date);
        this.appointmentSearchForm = this.formBuilder.group({
            "symptom": [searchParams.symptom, Validators.required],
            "location_type": ['city'],
            "location": [searchParams.location, Validators.required],
            "from_date": [searchParams.from_date, Validators.required],
            "to_date": [searchParams.to_date],
            "session": [searchParams.session],
            "lat":[searchParams.lat],
            "long":[searchParams.long]
        });
        this.appointmentSearchForm.updateValueAndValidity();
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

    //get Location on search
    getLocation() {
        let place = "";
        let defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(-33.8902, 151.1759),
            new google.maps.LatLng(-33.8474, 151.2631));
        let input = document.getElementById('location');
        let options = {
            types: ['geocode']
        };
        let autocomplete = new google.maps.places.Autocomplete(input, options);
        autocomplete.addListener('place_changed', () => {
            place = autocomplete.getPlace();
            let loc: any = this.sharingService.placeToJSON(place);
            loc.location = loc.location || {};
            this.appointmentSearchForm.controls['location'].setValue(loc.name);
            this.appointmentSearchForm.controls['lat'].setValue(loc.location.lat);
            this.appointmentSearchForm.controls['long'].setValue(loc.location.lng);
        });
    }

    //navigate to Appointment Results
    searchAppointments() {
        let reqObj = {
            'from_date': this.datePipe.transform(this.appointmentSearchForm.controls['from_date'].value, 'yyyy-MM-dd'),
            'location': this.appointmentSearchForm.controls['location'].value,
            'location_type': this.appointmentSearchForm.controls['location_type'].value,
            //'session': this.appointmentSearchForm.controls['session'].value,
            'symptom': this.appointmentSearchForm.controls['symptom'].value,
            'lat': this.appointmentSearchForm.controls['lat'].value,
            'long': this.appointmentSearchForm.controls['long'].value,
            //'to_date': this.datePipe.transform(this.appointmentSearchForm.controls['to_date'].value, 'yyyy-MM-dd'),
        }
        //let args = ['from_date', 'location', 'location_type', 'session', 'symptom', 'to_date'];
        //this.appointmentInfo.setLocalStorageParamsDynamically(args, reqObj);
        this.sharingService.setParams('activeClass','ap');
        this.appointmentInfo.setAppointmentSearchParams(reqObj);
        this.sharingService.setParams('appointments', reqObj);
        this.close.emit(reqObj);
    }

}