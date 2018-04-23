import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-hc-toggle-details',
    templateUrl: './hc-toggle-details.html'
})

export class HCToggleDetailsComponent {

    // @Input('hc')
    // hc: Object;
    public imgPrePath: string = '../../assets/img/';
    constructor() { }

    ngOnInit() { }
}