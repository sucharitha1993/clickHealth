import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppConfig } from './../app-config.service';
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
        //body.set('session', reqData.session);
       // body.set('location_type', reqData.location_type);
        //body.set('location', reqData.location);
        body.set('from_date', reqData.from_date);
        body.set('lat', reqData.lat);
        body.set('long', reqData.long);
        //body.set('to_date', reqData.to_date);

        return this.http.post(`${AppConfig.API_ENDPOINT}api/custom/doctors/`, body.toString(), options)
            .map(
                //res => res.json()
                response => {
                let res = response.json();
                let hospitalArr = [];
                let locArr = [];
                let langArr = [];
                if (res.status) {
                    res.data = res.data || {};
                    let obj = Object;
                    res.data.clinicians = obj.values(res.data.clinicians);
                    for (let i in res.data.clinicians) {
                        let hsptls = hospitalArr.filter(loc => loc.name == res.data.clinicians[i].hospital[0].name) || [];
                        if (hsptls.length <= 0) {
                            hospitalArr = hospitalArr.concat(res.data.clinicians[i].hospital);
                            res.data.hospitals = hospitalArr;
                        }
                        for (let j in res.data.clinicians[i].languages) {
                            let lang = langArr.filter(lang => lang.id == res.data.clinicians[i].languages[j].id) || [];
                            if (lang.length <= 0) {
                                langArr = langArr.concat(res.data.clinicians[i].languages);
                                res.data.languages = langArr;
                            }
                        }
                    }
                    for (let k in res.data.hospitals) {
                        let loc = locArr.filter(loc => loc.id == res.data.hospitals[k].location.id) || [];
                        if (loc.length <= 0) {
                            locArr = locArr.concat(res.data.hospitals[k].location);
                            res.data.locations = locArr;
                        }
                    }
                }
                return res;
                }
        );
    }

    //to confirm booking Appointment
    bookAppointment(argument) {
        let body = new URLSearchParams();
        body.set('clinician_id', argument.clinician_id);
        body.set('provider_id', argument.provider_id);
        body.set('date', argument.date);
        body.set('time', argument.time);
        body.set('seeker_id', argument.seeker_id);
        body.set('speciality_id', argument.speciality_id);
        body.set('fee', argument.fee);
        // body.set('date', '2018-03-01');
        // body.set('time', '13:25');
        return this.http.post(`${AppConfig.API_ENDPOINT}api/custom/appointment/`, body.toString(), options)
            .map(response => response.json());
    }

    //to generate OTP or booking appointment
    generateOtp(argument) {
        let body = new URLSearchParams();
        body.set('generate', 'true');
        body.set('email', argument.email);
        body.set('mobile', argument.mobile);
        return this.http.post(`${AppConfig.API_ENDPOINT}common/otp/`, body.toString(), options)
            .map(response => response.json());
    }

    //to check if user is authenticated or not
    checkAuthentication() {
        let url = `${AppConfig.API_ENDPOINT}common/is_authenticated/`;
        return this.http.get(url, '')
            .map(res => res.json())
    }

    //to check User Existence in db
    checkUserExistence(argument) {
        let body = new URLSearchParams();
        body.set('email', argument.email);
        body.set('mobile', argument.mobile);
        return this.http.post(`${AppConfig.API_ENDPOINT}common/check_user/`, body.toString(), options)
            .map(response => response.json());
    }

    //to verify user entered password
    checkForPwdAuthentication(argument) {
        let body = new URLSearchParams();
        body.set('username', argument.username);
        body.set('password', argument.password);
        return this.http.post(`${AppConfig.API_ENDPOINT}common/authenticate/`, body.toString(), options)
            .map(response => response.json());
    }

    // to create user 
    createUser(argument) {
        let body = new URLSearchParams();
        body.set('name', argument.name)
        body.set('username', argument.username)
        body.set('mobile', argument.mobile);
        body.set('password', argument.password);
        return this.http.post(`${AppConfig.API_ENDPOINT}common/create_user/`, body.toString(), options)
            .map(response => response.json());
    }
}