import { Injectable } from '@angular/core';

@Injectable()
export class AppointmentInfoService {

    medicalCenters: any = [];
    locations: any = [];
    cities: any = [];
    clinicians: any = [];
    appointmentSearchParams: any;

    constructor() {
    }

    //to set and get Locations
    setLocations(locations) {
        this.locations = locations || [];
    }
    getLocations() {
        return this.locations;
    }

    // to get cities from locations
    getCities(locations) {
        for (let i in locations) {
            if (locations[i] && locations[i].city && locations[i].city.name)
                this.cities.push(locations[i].city.name)
        }
        return this.cities;
    }

    // to set and get Hospitals
    setHospitals(hospitals) {
        this.medicalCenters = hospitals || [];
    }
    getHospitals() {
        return this.medicalCenters;
    }

    // to set and get clinicians
    setClinicians(clinicians) {
        this.clinicians = clinicians;
    }
    getClinicians() {
        return this.clinicians;
    }

    // to set n get Appointment search params
    setAppointmentSearchParams(params) {
        this.appointmentSearchParams = params;
    }
    getAppointmentSearchParams() {
        return this.appointmentSearchParams;
    }

    //to set n get values from localstorage
    setLocalStorageParamsDynamically(args, params) {
        for (let i in args) {
            localStorage.setItem(args[i], params[args[i]]);
        }
    }
    getLocalStorageParamsDynamically(args) {
        let obj: any = {};
        for (let i in args) {
            obj[args[i]] = localStorage.getItem(args[i])
        }
        return obj;
    }
} 