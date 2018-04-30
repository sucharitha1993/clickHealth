import { SharingService } from './../../../providers/services/sharing-service';
import { HCInfoService } from './../../../providers/services/health-checkups/hc-info-service';
import { HCDataService } from './../../../providers/services/health-checkups/hc-data-service';
import { Router } from '@angular/router';
import { HCModalComponent } from './hc-modal/hc-modal';
import { AppLitteralsConfig } from './../../../providers/literals/app.literals';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hc-result',
    templateUrl: './hc_result.html'
})
export class HCResultsComponent implements OnInit {

    imgPrePath: string = '../../assets/img/';
    showDetails: boolean = false;
    searchParams: any = {};

    constructor(public router: Router, public hcDataService: HCDataService, public hcInfoService: HCInfoService, public sharingService: SharingService) {
    }

    ngOnInit() {
        this.searchParams = this.hcInfoService.getHCSearchParams() || this.sharingService.getParams('hcSearchParams') || {};
    }

    searchHCRes(reqObj) {
        this.hcDataService.getHCSearchResults(reqObj)
            .subscribe((res) => {
                if (res.status) {
                    res.data = res.data || {};
                    console.log(res);
                }
            },
            error => {
                console.log('unable to load doctors');
            })
    }

    // to toggle hc details
    viewMore() {
        // hc.showDetails = hc.showDetails == undefined ? true : !hc.showDetails;
        this.showDetails = !this.showDetails;
    }

}
