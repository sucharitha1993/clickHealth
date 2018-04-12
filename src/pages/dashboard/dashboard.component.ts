import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {


    imgPrePath: string;
    activeTab: string = 'appointment';

    constructor() {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }

    selectedTab(value) {
        this.activeTab = value;
    }
}
