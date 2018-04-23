import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gift-health',
    templateUrl: './gift-health.component.html'
})
export class GiftHealthComponent implements OnInit {


    imgPrePath: string;

    constructor(public router: Router) {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }

    searchHCRes(reqObj) {
        this.router.navigateByUrl('/main/hc_result');
    }
}
