import { AppointmentInfoService } from './../../../providers/services/appointments/appointment-info-service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-category-filters',
    templateUrl: './category-filters.component.html',
    styleUrls: ['./category-filters.css']
})
export class CategoryFiltersComponent implements OnInit {

    @Output() filterItems: EventEmitter<any> = new EventEmitter();

    public medicalCenters: any;
    public locations: any;
    public languages: any;
    medicalSearchTerm: string;
    locationSearchTerm: string;
    genderSearchTerm: string;
    languageSearchTerm: string;
    public medicalArr = [];
    public genderArr = []; public locArr = []; public languageArr = [];


    //languages: object[] = [{ id: 'en', name: 'English' }, { id: 'tel', name: 'Telugu' }, { id: 'fr', name: 'french' }, { id: 'kn', name: 'kannada' }];
    genders: object[] = [{ id: 'm', name: 'Male' }, { id: 'f', name: 'Female' }];

    constructor(private appointmentInfo: AppointmentInfoService) {
    }

    ngOnInit() {
        this.medicalCenters = this.appointmentInfo.getHospitals();
        this.locations = this.appointmentInfo.getLocations();
        this.languages = this.appointmentInfo.getLanguages();
    }

    filterData(event, type, value) {
        if (event.target.checked) {
            if (type == 'medical') {
                this.medicalArr.push(value);
            } else if (type == 'gender') {
                this.genderArr.push(value);
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
            }
            else if (type == 'gender') {
                let i = this.genderArr.indexOf(value);
                if (i > -1) {
                    this.genderArr.splice(i, 1);
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
        let obj = { 'medical': this.medicalArr, 'location': this.locArr };
        this.filterItems.emit(obj);
    }
}
