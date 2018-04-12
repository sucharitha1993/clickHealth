import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-appointments',
    templateUrl: './appointments.component.html'
})
export class AppointmentsComponent implements OnInit {


    imgPrePath: string;
    states: Object[] = [
        { 'CODE': 'AP', 'DESC': 'Andhra Pradesh' },
        { 'CODE': 'AZ', 'DESC': 'Kurnool' },
        { 'CODE': 'AR', 'DESC': 'Vizag' },
        { 'CODE': 'CA', 'DESC': 'Mumbai' },
        { 'CODE': 'CO', 'DESC': 'Kolkatta' }
    ];

    constructor() {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }
}
