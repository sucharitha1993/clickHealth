import { LoaderService } from './../../../providers/services/loader-service';
import { Toastr } from './../../../providers/services/toastr.service';
import { HCSearchFormComponent } from './../../feature/hc-search-form/hc-search-form';
import { AppConfig } from './../../../providers/services/app-config.service';
import { SharingService } from './../../../providers/services/sharing-service';
import { HCInfoService } from './../../../providers/services/health-checkups/hc-info-service';
import { HCDataService } from './../../../providers/services/health-checkups/hc-data-service';
import { Router } from '@angular/router';
import { HCModalComponent } from './hc-modal/hc-modal';
import { AppLitteralsConfig } from './../../../providers/literals/app.literals';
import { Component, OnInit, ViewChild } from '@angular/core';

declare var google: any;

@Component({
    selector: 'app-hc-result',
    templateUrl: './hc_result.html'
})
export class HCResultsComponent implements OnInit {

    @ViewChild('hcsearch') hc_search: HCSearchFormComponent;

    public AppConfig: AppConfig;
    public AppLitteralsConfig = AppLitteralsConfig;
    imgPrePath: string = '../../assets/img/';
    showDetails: boolean = false;
    searchParams: any = {};
    hcData: any = [];
    address: any;

    constructor(public loader: LoaderService, public toastr: Toastr, public router: Router, public hcDataService: HCDataService, public hcInfoService: HCInfoService, public sharingService: SharingService) {
    }

    ngOnInit() {
        this.getGeolocation();
        this.searchParams = this.hcInfoService.getHCSearchParams() || this.sharingService.getParams('hcSearchParams') || {};
        this.searchHCRes(this.searchParams);
    }

    searchHCRes(reqObj) {
        this.loader.showLoader();
        this.hcDataService.getHCSearchResults(reqObj)
            .subscribe((res) => {
                this.loader.hideLoader();
                if (res.status) {
                    res.data = res.data || {};
                    this.hcData = res.data;
                } else {
                    this.toastr.showToastr('Unable to load doctors');                    
                }
            },
            error => {
                this.loader.hideLoader();
                this.toastr.showToastr('Unable to load doctors');
            })
    }

    // to toggle hc details
    viewMore(hc) {
        hc.showDetails = hc.showDetails == undefined ? true : !hc.showDetails;
    }

    onModifySearch() {
        this.hc_search.initialiseFields(true);
    }

    // functions to get Geo location
    ngAfterViewInit() {
        this.getGeolocation();
    }

    getGeolocation() {
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                position => {
                    if (position) {
                        this.getAddress(position.coords.latitude, position.coords.longitude);
                    }
                },
                error => {
                    console.log('not able to load visitors location');
                }
            );
        };
    }

    getAddress(lat, long) {
        var geocoder = new google.maps.Geocoder();
        var latLng = new google.maps.LatLng(lat, long);
        if (geocoder) {
            geocoder.geocode({ 'latLng': latLng }, (results, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    this.address = results[0].formatted_address;
                }
                else {
                    console.log("Geocoding failed: " + status);
                }
            });
        }
    }
}
