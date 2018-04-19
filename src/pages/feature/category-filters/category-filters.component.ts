import { FormBuilder, FormGroup } from '@angular/forms';
import { AppLitteralsConfig } from './../../../providers/literals/app.literals';
import { AppointmentInfoService } from './../../../providers/services/appointment-info-service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-category-filters',
    templateUrl: './category-filters.component.html',
    styleUrls: ['./category-filters.css']
})
export class CategoryFiltersComponent implements OnInit {

    @Output() filterItems: EventEmitter<any> = new EventEmitter();

    @Input('medicalCenters') medicalCenters: any;
    @Input('locations') locations: any;
    medicalSearchTerm: string;
    locationSearchTerm: string;
    genderSearchTerm: string;
    languageSearchTerm: string;
    public medicalArr = [];
    public genderArr = []; locArr = []; languageArr = [];

    searchForm: FormGroup

    languages: object[] = [{ id: 'en', name: 'English' }, { id: 'tel', name: 'Telugu' }, { id: 'fr', name: 'french' }, { id: 'kn', name: 'kannada' }];
    genders: object[] = [{ id: 'male', name: 'Male' }, { id: 'female', name: 'Female' }];

    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private appointmentInfo: AppointmentInfoService) {
    }

    ngOnInit() {
        this.initialisefields();
        this.locations = this.locations.length > 0 ? this.locations : this.appointmentInfo.getLocations();
        this.medicalCenters = this.medicalCenters.length > 0 ? this.medicalCenters : this.appointmentInfo.getHospitals();
    }

    initialisefields() {
        this.searchForm = this.formBuilder.group({
            "medical": [null],
            "gender": [null],
            "location": [null],
            "language": [null]
        });
    }

    filterData(event, type, value) {
        if (event.target.checked) {
            if (type == 'medical') {
                this.medicalArr.push(value);
                this.searchForm.controls[type].setValue(this.medicalArr);
            } else if (type == 'gender') {
                this.genderArr.push(value);
                this.searchForm.controls[type].setValue(this.genderArr);
            } else if (type == 'location') {
                this.locArr.push(value);
                this.searchForm.controls[type].setValue(this.locArr);
            } else {
                this.languageArr.push(value);
                this.searchForm.controls[type].setValue(this.languageArr);
            }
        } else {
            
        }
        console.log(this.searchForm.value);
       // this.filterItems.emit(this.searchForm.value);
    }
}
