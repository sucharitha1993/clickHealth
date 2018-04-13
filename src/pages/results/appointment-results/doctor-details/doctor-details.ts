import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-doctor-details',
    templateUrl: './doctor-details.html'
})

export class DoctorDetailsComponent {

    @Input('doctor')
    doctor: Object;

    constructor() { }

    ngOnInit() { }
}