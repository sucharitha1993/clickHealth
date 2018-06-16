import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-for-hp',
    templateUrl: './for-hp.html'
})
export class ForHealthProviderComponent implements OnInit {

    imgPrePath: string;

    constructor() {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }

}
