import { SharingService } from './../../providers/services/sharing-service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {


    imgPrePath: string;
    activeTab: string = 'ap';

    constructor(public SharingService: SharingService) {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
        this.activeTab = this.SharingService.getParams('activeClass') || this.activeTab;
        if (this.activeTab == 'fc' || this.activeTab == 'hp')
            this.activeTab = 'ap';
    }

    selectedTab(value) {
        this.SharingService.setParams('activeClass', value);
        this.activeTab = value;
    }
}
