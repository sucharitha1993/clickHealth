import { AppLitteralsConfig } from './../../../../providers/literals/app.literals';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-time-slot',
    templateUrl: './time-slot.html',
    styleUrls: ['./time-slot.css']
})

export class TimeSlotComponent {

    @Input('doctor')
    doctor: Object;

    timings = AppLitteralsConfig.timings;

    morningTimings: string[] = this.timings.morning;
    aftrnTimings: string[] = this.timings.aftrn;
    evengTimings: string[] = this.timings.eveng;

    constructor() { }

    ngOnInit() { }
}