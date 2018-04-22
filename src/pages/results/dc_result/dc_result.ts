import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dc-result',
    templateUrl: './dc_result.html'
})
export class DCResultComponent implements OnInit {


    imgPrePath: string;

    constructor() {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }
}
