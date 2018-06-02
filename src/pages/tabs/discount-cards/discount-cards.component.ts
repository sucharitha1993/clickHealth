import { DiscountDataService } from './../../../providers/services/discounts/dc-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-discount-cards',
    templateUrl: './discount-cards.component.html'
})
export class DiscountCardsComponent implements OnInit {


    imgPrePath: string;
    dcData: any;

    constructor(public dcService: DiscountDataService) {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
        this.loadDC();
    }

    loadDC() {
        this.dcService.getDiscounts()
            .subscribe(res => {
                if (res.status) {
                    res.data = res.data || {};
                    this.dcData = res.data;
                }
            },
            error => {
                console.log('unable to load')
            })
    }
}
