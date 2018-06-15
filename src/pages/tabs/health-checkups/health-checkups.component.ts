import { Toastr } from './../../../providers/services/toastr.service';
import { LoaderService } from './../../../providers/services/loader-service';
import { HCDataService } from './../../../providers/services/health-checkups/hc-data-service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-health-checkups',
    templateUrl: './health-checkups.component.html'
})
export class HealthCheckupComponent implements OnInit {


    imgPrePath: string;

    constructor(public loader: LoaderService, public toastr: Toastr, private router: Router, public hcDataService: HCDataService) {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }

    searchHCRes(reqObj) {
        this.loader.showLoader();
        this.hcDataService.getHCSearchResults(reqObj)
            .subscribe(res => {
                this.loader.hideLoader();
                if (res.status) {
                    res.data = res.data || {};
                    this.router.navigateByUrl('/main/hc_result')
                } else {
                    this.toastr.showToastr('Unable to Health checkups');
                }
            },
            error => {
                this.loader.hideLoader();
                this.toastr.showToastr('Unable to load Health checkups');
            })
    }
}
