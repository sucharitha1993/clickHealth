import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hc-details',
    templateUrl: './hc-details.html'
})
export class HCDetailsComponent implements OnInit {

    imgPrePath: string = '../../assets/img/';


    constructor(public router: Router) {
    }

    ngOnInit() {
    }

    bookHC() {
        this.router.navigateByUrl('/main/hc_otp');
    }

}
