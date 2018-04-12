import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gift-health',
    templateUrl: './gift-health.component.html'
})
export class GiftHealthComponent implements OnInit {


    imgPrePath: string;

    constructor() {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }
}
