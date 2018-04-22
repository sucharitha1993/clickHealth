import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-health-checkups',
    templateUrl: './health-checkups.component.html'
})
export class HealthCheckupComponent implements OnInit {


    imgPrePath: string;

    constructor(private router: Router) {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }

    searchHCRes(reqObj) {
        this.router.navigateByUrl('/main/hc_result')
    }
}
