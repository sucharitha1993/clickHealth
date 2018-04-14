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
            });
    }

    listFormatter = (data: any) => `<span>${data.name}</span>`;

    //navigate to Appointment Results
    searchAppointments() {
        let staticObj = {
            'from_date': '2018-03-09',
            'location': 'mum',       
            'location_type': 'city', 
            'session': 'morning',    
            'symptom': 'Cardiologis',
            'to_date': '2018-04-01'
        }
        this.apiServices.getDocList(this.appointmentSearchForm.value)
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