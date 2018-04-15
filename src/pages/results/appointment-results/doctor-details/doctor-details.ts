import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-doctor-details',
    templateUrl: './doctor-details.html'
})

export class DoctorDetailsComponent {

    @Input('doc')
    doc: any;

    constructor() { }

    ngOnInit() { }
}