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

}