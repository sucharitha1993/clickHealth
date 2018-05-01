import { Injectable } from '@angular/core';

@Injectable()
export class HCInfoService {

    public searchParams: any;
    medicalCenters: any = [];
    locations: any = [];
    languages: any;

    //to set and get HC search params
    setHCSearchParams(serchParams) {
        this.searchParams = serchParams;
    }
    getHCSearchParams() {
        return this.searchParams;
    }

    //to set and get Locations
    setLocations(locations) {
        this.locations = locations || [];
    }
    getLocations() {
        return this.locations;
    }
    // to set and get Hospitals
    setHospitals(hospitals) {
        this.medicalCenters = hospitals || [];
    }
    getHospitals() {
        return this.medicalCenters;
    }

    //to set and get Languages
    setLanguages(languages) {
        this.languages = languages;
    }
    getLanguages() {
        return this.languages;
    }

}