import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-appointments-discounts',
    templateUrl: './appointments-discounts.html'
})
export class AppointmentsDiscountsComponent implements OnInit {


    imgPrePath: string;

    constructor() {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }
}
