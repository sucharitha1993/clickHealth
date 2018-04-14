import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-hc-details',
    templateUrl: './hc-details.html'
})

export class HCDetailsComponent {

    @Input('hc')
    hc: Object;

    constructor() { }

    ngOnInit() { }
}