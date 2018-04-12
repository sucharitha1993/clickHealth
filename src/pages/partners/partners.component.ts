import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html'
})
export class PartnersComponent implements OnInit {


    imgPrePath: string;

    constructor() {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }
}
