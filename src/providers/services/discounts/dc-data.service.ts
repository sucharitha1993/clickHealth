import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppConfig } from './../app-config.service';
import 'rxjs/add/operator/map';


let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class DiscountDataService {

    constructor(private http: Http) {

    }

    //to get Discounts data
    getDiscounts() {
        let url = `${AppConfig.API_ENDPOINT}api/discountcard/`;
        return this.http.get(url, '')
            .map(res => res.json())
    }

}