import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-service-providers',
    templateUrl: './service-providers.component.html'
})
export class ServiceProvidersComponent implements OnInit {


    imgPrePath: string;

    constructor() {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }
}
