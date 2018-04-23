import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hc-otp',
    templateUrl: './hc-otp.html'
})
export class HCOTPComponent implements OnInit {

    imgPrePath: string = '../../assets/img/';


    constructor(public router: Router) {
    }

    ngOnInit() {
    }

    navigateToConfirmPage() {
        this.router.navigateByUrl('/main/hc_confirm')
    }

}
