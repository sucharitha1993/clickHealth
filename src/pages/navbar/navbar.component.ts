import { SharingService } from './../../providers/services/sharing-service';
import { AppConfig } from './../../providers/services/app-config.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    AppConfig: AppConfig;
    imgPrePath: string;
    healthSeekerSigin: any = `${AppConfig.API_ENDPOINT}healthseeker/signin`;
    healthProviderSignin: any = `${AppConfig.API_ENDPOINT}healthprovider/signin`;
    clinicianSignin: any = `${AppConfig.API_ENDPOINT}clinician/signin`;
    sponsorSignin: any = `${AppConfig.API_ENDPOINT}sponsor/signin`;
    adminSignin: any = `${AppConfig.API_ENDPOINT}site_admin/signin`;

    constructor(private router: Router, public SharingService: SharingService) {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }

    navigateToMain() {
        this.router.navigateByUrl('/main');
    }

    resetActiveClass(page) {
        this.SharingService.setParams('activeClass', page);
    }
}
