import { AppointmentInfoService } from './../../providers/services/appointment-info-service';
import { AppLitteralsConfig } from './../../providers/literals/app.literals';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-category-filters',
    templateUrl: './category-filters.component.html'
})
export class CategoryFiltersComponent implements OnInit {


    medicalCenters: any = [];
    locations: any = [];
    medicalSearchTerm: string;
    locationSearchTerm: string;

    constructor(private route: ActivatedRoute, private appointmentInfo: AppointmentInfoService) {
    }

    ngOnInit() {
        this.locations = this.appointmentInfo.getLocations();
        this.medicalCenters = this.appointmentInfo.getHospitals();
    }
}
