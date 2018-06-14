import { Toastr } from './../../../providers/services/toastr.service';
import { SharingService } from './../../../providers/services/sharing-service';
import { DCInfoService } from './../../../providers/services/discounts/dc-info.service';
import { CaroselService } from './../../../providers/services/carosel-service';
import { DiscountDataService } from './../../../providers/services/discounts/dc-data.service';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from './../../../providers/services/loader-service';

@Component({
    selector: 'app-discount-cards',
    templateUrl: './discount-cards.component.html',
    styleUrls: ['./discount-cards.component.css']
})
export class DiscountCardsComponent implements OnInit {


    imgPrePath: string;
    dcData: any = [];

    constructor(public toastr: Toastr, public loader: LoaderService, public dcService: DiscountDataService, public CaroselService: CaroselService, public dcInfo: DCInfoService, public sharingService: SharingService) {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
        this.loadDC();
    }

    ngAfterViewInit() {
        this.CaroselService.loadOwlCarousel();
    }

    loadDC() {
        this.loader.showLoader();
        this.dcService.getDiscounts()
            .subscribe(res => {
                this.loader.hideLoader();
                if (res.results) {
                    res.results = res.results || [];
                    this.dcData = res.results;
                    this.dcInfo.setDCData(this.dcData);
                    this.sharingService.setParams('dcData', this.dcData);
                }
            },
            error => {
                this.loader.hideLoader();
                this.toastr.showToastr('unable to Discounts'); 
            })
    }
}
