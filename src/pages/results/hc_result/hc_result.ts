import { AppLitteralsConfig } from './../../../providers/literals/app.literals';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hc-result',
    templateUrl: './hc_result.html'
})
export class HCResultsComponent implements OnInit {

    imgPrePath: string = '../../assets/img/';

    constructor() {
    }

    ngOnInit() {
    }

    // to toggle details
    viewMore(hc) {
        hc.showDetails = hc.showDetails == undefined ? true : !hc.showDetails;
    }
}
