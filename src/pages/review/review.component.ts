import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-review',
    templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {


    imgPrePath: string;

    constructor() {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }
}
