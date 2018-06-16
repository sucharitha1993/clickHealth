import { Router } from '@angular/router';
import { SharingService } from './../../../providers/services/sharing-service';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-django-header',
    templateUrl: './django-header.html'
})
export class DjangoHeaderComponent implements OnInit {

    authentication: any;
    public imgPrePath = '../../../../assets/img/';

    constructor(public router: Router, public sharingService: SharingService) {
    }

    ngOnInit() {
        this.authentication = this.sharingService.getParams('isAuthenticated') || {};
    }

    ngAfterViewInit() {
        $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(300);
          }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
          });  
    }

    navigateToMain() {
        this.router.navigateByUrl('/main');
    }

    navigateTo(page) {
        this.sharingService.setParams('activeClass', page);
        this.router.navigateByUrl('/main');
    }

}
