import { AppLitteralsConfig } from './../../../providers/literals/app.literals';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-health-checkup-results',
    templateUrl: './health-checkup-results.html'
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
