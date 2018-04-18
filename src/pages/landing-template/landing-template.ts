import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing-template',
    templateUrl: './landing-template.html'
})
export class LandingTemplate implements OnInit {

    imgPrePath: string = '../../assets/img/';
    howItWorks: object[] = [
        { 'iconVal': 'fa fa-calendar', 'label': 'Online Appointment', 'classType': 'how_it_works_in_6' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Doctor Profile', 'classType': 'how_it_works_in_6_r' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Health Packages', 'classType': 'how_it_works_in_6' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Patient Activity Status', 'classType': 'how_it_works_in_6_r' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Patient Communication', 'classType': 'how_it_works_in_6' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Secure Messaging', 'classType': 'how_it_works_in_6_r' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Patient Check-in', 'classType': 'how_it_works_in_6' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Electronic Medical', 'classType': 'how_it_works_in_6_r' }
    ]

    constructor() {
    }

    ngOnInit() {
    }
}
