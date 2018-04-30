import { HCDataService } from './../../../providers/services/health-checkups/hc-data-service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-health-checkups',
    templateUrl: './health-checkups.component.html'
})
export class HealthCheckupComponent implements OnInit {


    imgPrePath: string;

    constructor(private router: Router, public hcDataService: HCDataService) {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }

    searchHCRes(reqObj) {
        this.hcDataService.getHCSearchResults(reqObj)
            .subscribe(res => {
                if (res.status) {
                    res.data = res.data || {};
                    this.router.navigateByUrl('/main/hc_result')
                }
            },
            error => {
                console.log('unable to load doctors');
            })
    }
}
