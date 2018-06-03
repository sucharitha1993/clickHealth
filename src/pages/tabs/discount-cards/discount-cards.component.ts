import { CaroselService } from './../../../providers/services/carosel-service';
import { DiscountDataService } from './../../../providers/services/discounts/dc-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-discount-cards',
    templateUrl: './discount-cards.component.html',
    styleUrls: ['./discount-cards.component.css']
})
export class DiscountCardsComponent implements OnInit {


    imgPrePath: string;
    dcData: any= [];

    constructor(public dcService: DiscountDataService, public CaroselService: CaroselService) {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
        this.loadDC();
    }

    ngAfterViewInit() {
        this.CaroselService.loadOwlCarousel();
    }

    loadDC() {
        this.dcService.getDiscounts()
            .subscribe(res => {
                if (res.results) {
                    res.results = res.results || [];
                    this.dcData = res.results;
                }
            },
            error => {
                console.log('unable to load')
            })
    }
}
