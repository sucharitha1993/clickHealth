import { Router } from '@angular/router';
import { SharingService } from './../../../providers/services/sharing-service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-django-header',
    templateUrl: './django-header.html'
})
export class DjangoHeaderComponent implements OnInit {

    authentication: any;

    constructor(public router: Router, public sharingService: SharingService) {
    }

    ngOnInit() {
        this.authentication = this.sharingService.getParams('isAuthenticated') || {};
    }

    navigateToMain() {
        this.router.navigateByUrl('/main');
    }

    navigateTo(page) {
        this.sharingService.setParams('activeClass', page);
        this.router.navigateByUrl('/main');
    }

}
