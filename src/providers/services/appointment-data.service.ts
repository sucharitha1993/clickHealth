import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from './app-config.service';
import 'rxjs/add/operator/map';


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
} 