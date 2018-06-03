import { SharingService } from './../../../providers/services/sharing-service';
import { DCInfoService } from './../../../providers/services/discounts/dc-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dc-result',
    templateUrl: './dc_result.html'
})
export class DCResultComponent implements OnInit {


    imgPrePath: string;
    dcData: any = [];
    activeDiscount: any = {};

    constructor(public dcInfo: DCInfoService, public sharingService: SharingService) {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
        this.dcData = this.dcInfo.getDCData() || this.sharingService.getParams('dcData');
        this.dcData[0] = this.dcData[0] || {};
        this.dcData[0].activeClass = true;
        this.activeDiscount = this.dcData[0];
    }

    checkActiveClass(data) {
        data.activeClass == !data.activeClass == undefined ? true : !data.activeClass;
        this.activeDiscount = data;
    }

}
