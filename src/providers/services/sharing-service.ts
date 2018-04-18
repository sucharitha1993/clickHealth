import { Injectable } from '@angular/core';

@Injectable()
export class SharingService {
    public storageName: string;

    constructor() { }

    setParams(storageName, data: any) {
        localStorage.setItem(storageName, JSON.stringify(data));
    }

    getParams(storageName) {
        let data = localStorage.getItem(storageName);
        return JSON.parse(data);
    }

    clearParams(storageName) {
        localStorage.removeItem(storageName);
    }

    cleanAllParams() {
        localStorage.clear();
    }

    //to convert place into json format
    placeToJSON(place) {
        let fields = ['address_components', 'vicinity', 'name', 'formatted_address', 'place_id'];
        let return_place = {};
        // commonplace field addition
        fields.forEach((v, i) => {
            return_place[v] = place[v];
        });
        // add the lat long details
        return_place['location'] = place.geometry.location.toJSON();
        return return_place;
    };

}