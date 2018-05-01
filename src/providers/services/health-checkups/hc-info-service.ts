import { Injectable } from '@angular/core';

@Injectable()
export class HCInfoService {

    public searchParams: any;

    //to set and get HC search params
    setHCSearchParams(serchParams) {
        this.searchParams = serchParams;
    }
    getHCSearchParams() {
        return this.searchParams;
    }

}