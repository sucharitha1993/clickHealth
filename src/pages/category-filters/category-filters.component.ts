import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-category-filters',
    templateUrl: './category-filters.component.html'
})
export class CategoryFiltersComponent implements OnInit {


    medicalCenters: string[] = [
        'A N N Hospital',
        'Abhijay Hospital',
        'Agada Hospital',
        'Apollo Childrens Hospitals',
        'Apollo Day Surgery',
        'Apollo First Med Hospital'
    ];

    locations: string[] = [
        'Adayar',
        'Ayanambakkam',
        'Chetpet',
        'Greams Road',
        'Kotturpuram',
        'Hyderabad'
    ];

    medicalSearchTerm: string;
    locationSearchTerm: string;

    constructor() {
    }

    ngOnInit() {
    }
}
