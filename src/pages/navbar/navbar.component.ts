import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {


    imgPrePath: string;

    constructor(private router: Router) {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }

    navigateToMain() {
        this.router.navigateByUrl('/main');
    }
}
