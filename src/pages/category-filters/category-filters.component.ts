import { AppointmentInfoService } from './../../providers/services/appointment-info-service';
import { AppLitteralsConfig } from './../../providers/literals/app.literals';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-category-filters',
    templateUrl: './category-filters.component.html'
})
export class CategoryFiltersComponent implements OnInit {

    @Input('medicalCenters') medicalCenters: any;
    @Input('locations') locations: any;
    cities: any = [];
    medicalSearchTerm: string;
    locationSearchTerm: string;

    constructor(private route: ActivatedRoute, private appointmentInfo: AppointmentInfoService) {
    }

    ngOnInit() {
        this.locations = this.locations.length > 0 ? this.locations : this.appointmentInfo.getLocations();
        this.medicalCenters = this.medicalCenters.length > 0 ? this.medicalCenters : this.appointmentInfo.getHospitals();
        this.cities = this.appointmentInfo.getCities(this.locations);
    }
}
