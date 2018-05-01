import { HCInfoService } from './../../../providers/services/health-checkups/hc-info-service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'hc-category-filters',
    templateUrl: './category-filters.component.html',
    styleUrls: ['./category-filters.css']
})
export class HCCategoryFiltersComponent implements OnInit {

    @Output() filterItems: EventEmitter<any> = new EventEmitter();

    public medicalCenters: any;
    public locations: any;
    public languages: any;
    medicalSearchTerm: string;
    locationSearchTerm: string;
    genderSearchTerm: string;
    languageSearchTerm: string;
    public medicalArr = []; public locArr = []; public languageArr = [];

    constructor(private hcInfoService: HCInfoService) {
    }

    ngOnInit() {
        this.medicalCenters = this.hcInfoService.getHospitals();
        this.locations = this.hcInfoService.getLocations();
        this.languages = this.hcInfoService.getLanguages();
    }

    filterData(event, type, value) {
        if (event.target.checked) {
            if (type == 'medical') {
                this.medicalArr.push(value);
            } else if (type == 'location') {
                this.locArr.push(value);
            } else {
                this.languageArr.push(value);
            }
        } else {
            if (type == 'medical') {
                let i = this.medicalArr.indexOf(value);
                if (i > -1) {
                    this.medicalArr.splice(i, 1);
                }
            } else if (type == 'location') {
                let i = this.locArr.indexOf(value);
                if (i > -1) {
                    this.locArr.splice(i, 1);
                }
            } else {
                let i = this.languageArr.indexOf(value);
                if (i > -1) {
                    this.languageArr.splice(i, 1);
                }
            }
        }
        let obj = { 'medical': this.medicalArr, 'location': this.locArr, 'language': this.languageArr };
        this.filterItems.emit(obj);
    }
}
