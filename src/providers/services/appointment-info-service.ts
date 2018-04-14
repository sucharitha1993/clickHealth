import { Injectable } from '@angular/core';

@Injectable()
export class AppointmentInfoService {

    medicalCenters: any = [];
    locations: any = [];

    constructor() {
    }

    setLocations(hospitals) {
        this.medicalCenters = hospitals || [];
    }
    getLocations() {
        return this.medicalCenters;
    }
    setHospitals(locations) {
        this.locations = locations || [];
    }
    getHospitals() {
        return this.locations;
    }
} 