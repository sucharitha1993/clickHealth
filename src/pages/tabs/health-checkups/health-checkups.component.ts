import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-health-checkups',
    templateUrl: './health-checkups.component.html'
})
export class HealthCheckupComponent implements OnInit {


    imgPrePath: string;

    constructor() {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }
}
