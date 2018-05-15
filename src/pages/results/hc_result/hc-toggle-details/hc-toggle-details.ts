import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-hc-toggle-details',
    templateUrl: './hc-toggle-details.html'
})

export class HCToggleDetailsComponent {

    @Input('hcDetails')
    hcDetails: any;

    @Input('hcTests')
    hcTests: any = [];

    public imgPrePath: string = '../../assets/img/';
    constructor() { }

    ngOnInit() { }
}