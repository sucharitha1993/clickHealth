import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppConfig } from './app-config.service';
import 'rxjs/add/operator/map';


let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class AppointmentDataService {

    constructor(private http: Http) {

    }

    //to get Auto complete data
    getAutoCompleteData(condition, query) {
        let url = `${AppConfig.API_ENDPOINT}common/autocomplete/${condition}/${query}/`;
        return this.http.post(url, '')
            .map(res => res.json())
    }

    //to get Doctors list for Appointment
    getDocList(reqData) {
        let body = new URLSearchParams();
        body.set('symptom', reqData.symptom);
        body.set('session', reqData.session);
        body.set('location_type', reqData.location_type);
        body.set('location', reqData.location);
        body.set('from_date', reqData.from_date);
        body.set('to_date', reqData.to_date);

        return this.http.post(`${AppConfig.API_ENDPOINT}api/custom/doctors/`, body.toString(), options)
            .map(response => response.json());
    }
} 