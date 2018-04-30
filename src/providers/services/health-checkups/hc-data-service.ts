import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppConfig } from './../app-config.service';
import 'rxjs/add/operator/map';

let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class HCDataService {

    constructor(private http: Http) {

    }
    //to get Auto complete data
    getAutoCompleteData(condition, query) {
        let url = `${AppConfig.API_ENDPOINT}common/autocomplete/${condition}/${query}/`;
        return this.http.post(url, '')
            .map(res => res.json())
    }

    //to get HC Search Results
    getHCSearchResults(reqData) {
        let body = new URLSearchParams();
        body.set('gender', reqData.gender);
        body.set('type', reqData.general);
        body.set('age_range', reqData.age);
        return this.http.post(`${AppConfig.API_ENDPOINT}api/custom/healthchecks/`, body.toString(), options)
            .map(response => response.json()
            );
    }
}