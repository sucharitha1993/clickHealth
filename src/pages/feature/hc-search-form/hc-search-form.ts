import { HCDataService } from './../../../providers/services/health-checkups/hc-data-service';
import { HCInfoService } from './../../../providers/services/health-checkups/hc-info-service';
import { SharingService } from './../../../providers/services/sharing-service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var $: any;

@Component({
    selector: 'app-hc-search-form',
    templateUrl: './hc-search-form.html'
})
export class HCSearchFormComponent implements OnInit {

    @Output() close: EventEmitter<any> = new EventEmitter();
    @Input('isModal')
    isModal: boolean;

    imgPrePath: string = '../../assets/img/';

    hcSearchForm: FormGroup;
    searchParams: any;

    generals: string[] = [
        "Preventive",
        "Diabetes",
        "Cancer",
        "Antenatal"
    ];

    ageGroup: string[] = [
        "0-10",
        "10-20",
        "20-30",
        "30-40",
        "40-50",
        "50-60",
        "60+"
    ];
    genders: string[] = [
        "Male",
        "Female"
    ];

    constructor(private hcDataService: HCDataService, private formBuilder: FormBuilder, public sharingService: SharingService, public hcInfoService: HCInfoService) {

    }

    ngOnInit() {
        this.hcDataService.getGenerals()
            .subscribe((res) => {
                this.generals = res.data;
            },
            err => {

            })
        this.initialiseFields(this.isModal);
    }

    //to initialise form fields
    initialiseFields(isModal) {
        if (isModal) {
            this.searchParams = this.hcInfoService.getHCSearchParams() || this.sharingService.getParams('hcSearchParams') || {};
        }
        let searchParams = this.searchParams || {};
        this.hcSearchForm = this.formBuilder.group({
            "gender": [searchParams.gender, Validators.required],
            "general": [searchParams.general, Validators.required],
            "age": [searchParams.age, Validators.required],
        });
    }

    //navigate to HC Results
    naviagteToHCRes() {
        let speciality_id: any;
        for (let i in this.generals) {
            if (this.hcSearchForm.controls['general'].value == this.generals[i])
                speciality_id = i;
        }
        let reqObj = {
            "applicability": "general/specific",
            'gender': (this.hcSearchForm.controls['gender'].value).toLowerCase(),
            //'general': (this.hcSearchForm.controls['general'].value).toLowerCase(),
            'age': this.hcSearchForm.controls['age'].value,
            "speciality_id": speciality_id
        }
        this.hcInfoService.setHCSearchParams(reqObj);
        this.sharingService.setParams('hcSearchParams', reqObj);
        this.sharingService.setParams('activeClass', 'hc');
        this.close.emit(reqObj);
    }

}