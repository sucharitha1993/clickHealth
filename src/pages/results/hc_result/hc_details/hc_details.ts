import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-hc-details',
    templateUrl: './hc_details.html'
})

export class HCDetailsComponent {

    // @Input('hc')
    // hc: Object;
    public imgPrePath: string = '../../assets/img/';
    constructor() { }

    ngOnInit() { }
}