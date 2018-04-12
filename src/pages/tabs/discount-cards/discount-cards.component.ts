import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-discount-cards',
    templateUrl: './discount-cards.component.html'
})
export class DiscountCardsComponent implements OnInit {


    imgPrePath: string;

    constructor() {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }
}
