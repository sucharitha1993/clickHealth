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
    conditions: any = [];
    localities: any = [];

    appointmentSearchForm: FormGroup;

    constructor(private apiServices: AppointmentDataService, public formBuilder: FormBuilder, private router: Router) {
    }

    ngOnInit() {
        this.initialiseAppointmentfields();
    }

    initialiseAppointmentfields() {
        this.appointmentSearchForm = this.formBuilder.group({
            "conditions": [null, Validators.required],
            "location": [null, Validators.required],
            "from_date": [null, Validators.required],
            "to_date": [null, Validators.required],
            "time": [null, Validators.required]
        });
    }

    //to search states on ngModelChange
    searchConditions(state) {
        this.apiServices.getAutoCompleteData('condition', state)
            .subscribe((result: any) => {
                this.conditions = result.data;
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
        this.router.navigate(['/dashboard/ap_result'],
            {
                queryParams: this.appointmentSearchForm.value,
                skipLocationChange: true
            }
        );
    }

}