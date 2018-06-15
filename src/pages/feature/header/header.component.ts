import { Router } from '@angular/router';
import { SharingService } from './../../../providers/services/sharing-service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    public activeClass: string;

    constructor(public router: Router, public SharingService: SharingService) {
    }

    ngOnInit() {
        this.activeClass = this.SharingService.getParams('activeClass');
    }

    navigateToMain() {
        this.router.navigateByUrl('/main');
    }

    navigateTo(page) {
        switch (page) {
            case 'ap':
                this.activeClass = 'ap';
                this.router.navigateByUrl('/main/ap_result');
                break;
            case 'hc':
                this.activeClass = 'hc';
                this.router.navigateByUrl('/main/hc_result');
                break;
            case 'dc':
                this.activeClass = 'dc';
                this.router.navigateByUrl('/main/dc_result');
                break;
        }
    }
}
