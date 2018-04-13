import { AppLitteralsConfig } from './../../providers/literals/app.literals';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-category-filters',
    templateUrl: './category-filters.component.html'
})
export class CategoryFiltersComponent implements OnInit {


    medicalCenters: string[] = AppLitteralsConfig.medicalCenters;
    locations: string[] = AppLitteralsConfig.locations;
    medicalSearchTerm: string;
    locationSearchTerm: string;

    constructor() {
    }

    ngOnInit() {
    }
}
