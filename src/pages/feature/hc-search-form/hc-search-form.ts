import { SharingService } from './../../../providers/services/sharing-service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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

    constructor(private formBuilder: FormBuilder,public sharingService:SharingService) {

    }

    ngOnInit() {
        this.initialiseFields(this.isModal);
    }

    //to initialise form fields
    initialiseFields(isModal) {
        if (isModal) {
        }
        let searchParams = this.searchParams || {};
        this.hcSearchForm = this.formBuilder.group({
            "condition": [searchParams.symptom, Validators.required],
            "gender": [searchParams.location, Validators.required],
            "general": [searchParams.from_date, Validators.required],
            "age": [searchParams.to_date, Validators.required],
        });
    }

    //navigate to HC Results
    naviagteToHCRes() {
        let reqObj = {
            'condition': this.hcSearchForm.controls['condition'].value,
            'gender': this.hcSearchForm.controls['gender'].value,
            'general': this.hcSearchForm.controls['general'].value,
            'age': this.hcSearchForm.controls['age'].value
        }
        this.sharingService.setParams('activeClass','hc');        
        this.close.emit(reqObj);
    }

}