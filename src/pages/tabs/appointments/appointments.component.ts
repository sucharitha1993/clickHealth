import { Component, OnInit } from '@angular/core';
import { AppointmentDataService } from './../../../providers/services/appointment-data.service';
@Component({
    selector: 'app-appointments',
    templateUrl: './appointments.component.html'
})
export class AppointmentsComponent implements OnInit {


    imgPrePath: string = '../../assets/img/';;
    states: any = [];
    localities: any = [];

    constructor(private apiServices: AppointmentDataService) {
    }

    ngOnInit() {
    }

    //to search states on ngModelChange
    searchStates(state) {
        this.apiServices.getAutoCompleteData('condition', state)
            .subscribe((result: any) => {debugger;
                this.states = result.data;
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
}