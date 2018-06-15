import { DiscountDataService } from './../../../providers/services/discounts/dc-data.service';
import { Toastr } from './../../../providers/services/toastr.service';
import { LoaderService } from './../../../providers/services/loader-service';
import { AppConfig } from './../../../providers/services/app-config.service';
import { SharingService } from './../../../providers/services/sharing-service';
import { DCInfoService } from './../../../providers/services/discounts/dc-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dc-result',
    templateUrl: './dc_result.html'
})
export class DCResultComponent implements OnInit {

    AppConfig: AppConfig;
    imgPrePath: string;
    dcData: any = [];
    activeDiscount: any = {};
    url: any;

    constructor(public loader: LoaderService,public toastr: Toastr,public dcService: DiscountDataService, public dcInfo: DCInfoService, public sharingService: SharingService) {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
        this.dcData = this.dcInfo.getDCData() || this.sharingService.getParams('dcData') || this.loadDC();
        this.setActiveDC();
    }

    checkActiveClass(data) {
        data.activeClass == !data.activeClass == undefined ? true : !data.activeClass;
        this.activeDiscount = data;
        this.url = `${AppConfig.IMG_URL}healthseeker/discountcard_get/?card_id=${this.activeDiscount.id}`;
    }

    setActiveDC() {
        if (this.dcData) {
            this.dcData[0] = this.dcData[0] || {};
            this.dcData[0].activeClass = true;
            this.activeDiscount = this.dcData[0];
            this.url = `${AppConfig.IMG_URL}healthseeker/discountcard_get/?card_id=${this.activeDiscount.id}`;
        }
    }

    loadDC() {
        this.loader.showLoader();
        this.dcService.getDiscounts()
            .subscribe(res => {
                this.loader.hideLoader();
                if (res.results) {
                    res.results = res.results || [];
                    this.dcData = res.results;
                    this.setActiveDC();
                    this.dcInfo.setDCData(this.dcData);
                    this.sharingService.setParams('dcData', this.dcData);
                } else {
                    this.toastr.showToastr('unable to Discounts');
                }
            },
            error => {
                this.loader.hideLoader();
                this.toastr.showToastr('unable to Discounts');
            })
    }

}
