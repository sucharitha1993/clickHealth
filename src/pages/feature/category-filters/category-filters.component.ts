import { AppLitteralsConfig } from './../../../providers/literals/app.literals';
import { AppointmentInfoService } from './../../../providers/services/appointment-info-service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-category-filters',
    templateUrl: './category-filters.component.html',
    styleUrls: ['./category-filters.css']
})
export class CategoryFiltersComponent implements OnInit {

    @Input('medicalCenters') medicalCenters: any;
    @Input('locations') locations: any;
    medicalSearchTerm: string;
    locationSearchTerm: string;
    languages: object[] = [{ id: 'en', name: 'English' }, { id: 'tel', name: 'Telugu' }, { id: 'kn', name: 'kannada' }];
    genders: object[] = [{ id: 'male', name: 'Male' }, { id: 'female', name: 'Female' }];

    constructor(private route: ActivatedRoute, private appointmentInfo: AppointmentInfoService) {
    }

    ngOnInit() {
        this.locations = this.locations.length > 0 ? this.locations : this.appointmentInfo.getLocations();
        this.medicalCenters = this.medicalCenters.length > 0 ? this.medicalCenters : this.appointmentInfo.getHospitals();
    }
}
