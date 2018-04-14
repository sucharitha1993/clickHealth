import { Component, OnInit } from '@angular/core';
import { AppointmentDataService } from './../../../providers/services/appointment-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-appointments',
    templateUrl: './appointments.component.html',
    styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {


    imgPrePath: string = '../../assets/img/';;
    symptom: any = [];
    localities: any = [];
    cities: any = [];

    appointmentSearchForm: FormGroup;

    constructor(private apiServices: AppointmentDataService, public formBuilder: FormBuilder, private router: Router) {
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
        this.apiServices.getAutoCompleteData('condition', state)
            .subscribe((result: any) => {
                this.symptom = result.data;
            });
    }

    //to search states on ngModelChange
    searchLocality(location) {
        this.apiServices.getAutoCompleteData('location', location)
            .subscribe((result: any) => {
                this.localities = result.data;
                for(var i=0;i<this.localities.length;i++) {
                    this.cities.push(this.localities[i].city);
                }
            });
    }

    conditionsListFormatter = (data: any) => `<span>${data.name}</span>`;
    locationsListFormatter = (data: any) => `<span>${data.name}</span>`;

    //navigate to Appointment Results
    searchAppointments() {
        let symptom = this.appointmentSearchForm.controls['symptom'].value || {};
        symptom = symptom.name || '';
        let reqObj = {
            'from_date': this.appointmentSearchForm.controls['from_date'].value,
            'location': this.appointmentSearchForm.controls['location'].value,       
            'location_type': this.appointmentSearchForm.controls['location_type'].value, 
            'session': this.appointmentSearchForm.controls['session'].value,    
            'symptom': symptom,
            'to_date': this.appointmentSearchForm.controls['symptom'].value
        }
        this.apiServices.getDocList(reqObj)
            .subscribe((res) => {
                console.log(res);
                // this.router.navigate(['/dashboard/ap_result'],
                //     {
                //         queryParams: this.appointmentSearchForm.value,
                //         skipLocationChange: true
                //     }
                // );
            },
            error => {
                console.log('unable to load doctors');
            })
    }

}