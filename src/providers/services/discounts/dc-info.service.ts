import { Injectable } from '@angular/core';

@Injectable()
export class DCInfoService {

    public dcData: any;

    //to set and get DC data
    setDCData(dcData) {
        this.dcData = dcData;
    }
    getDCData() {
        return this.dcData;
    }

}