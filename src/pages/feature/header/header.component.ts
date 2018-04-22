import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    constructor(public router: Router) {
    }

    ngOnInit() {
    }

    navigateToMain() {
        this.router.navigateByUrl('/main');
    }
}
