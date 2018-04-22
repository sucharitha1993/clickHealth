import { SharingService } from './../../../providers/services/sharing-service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    public activeClass: string;

    constructor(public SharingService: SharingService) {
    }

    ngOnInit() {
        this.activeClass = this.SharingService.getParams('activeClass');
    }

    navigateToMain() {
        this.router.navigateByUrl('/main');
    }
}
