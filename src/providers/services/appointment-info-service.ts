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

    //to set values into localstorage
    setParamstoLocalStorage(params) {
        // localStorage.setItem('symptom', 'internal Medicine Physician');
        // localStorage.setItem('session', 'morning');
        // localStorage.setItem('location_type', 'city');
        // localStorage.setItem('location', 'mumbai');
        // localStorage.setItem('from_date', '2018-03-01');
        // localStorage.setItem('to_date', '2018-04-30');
        localStorage.setItem('symptom', params.symptom);
        localStorage.setItem('session', params.session);
        localStorage.setItem('location_type', params.location_type);
        localStorage.setItem('location', params.location);
        localStorage.setItem('from_date', params.from_date);
        localStorage.setItem('to_date', params.to_date);
    }

    getParamsFromLocalStorage() {
        let obj = {
            'from_date': localStorage.getItem('from_date'),
            'location': localStorage.getItem('location'),
            'location_type': localStorage.getItem('location_type'),
            'session': localStorage.getItem('session'),
            'symptom': localStorage.getItem('symptom'),
            'to_date': localStorage.getItem('to_date')
        }
        return obj;
    }
	
	//backup code
    getParams(args, argument) {
        let body = new URLSearchParams();
        for (let i in args) {
            body.set(args[i], argument[args[i]]);
        }
        return body.toString();
    }
} 