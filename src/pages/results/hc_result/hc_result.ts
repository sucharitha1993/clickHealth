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

    constructor(public router: Router) {
    }

    ngOnInit() {
    }

    searchHCRes(reqObj) {
        //this.router.navigateByUrl('/main/hc_details');
    }

    // to toggle hc details
    viewMore() {
        // hc.showDetails = hc.showDetails == undefined ? true : !hc.showDetails;
        this.showDetails = !this.showDetails;
    }

}
