import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-for-corporates',
    templateUrl: './for-corporates.html'
})
export class ForCorporatesComponent implements OnInit {

    imgPrePath: string;

    constructor() {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }

}
