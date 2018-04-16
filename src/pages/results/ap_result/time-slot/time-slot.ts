import { Router } from '@angular/router';
import { AppointmentInfoService } from './../../../../providers/services/appointment-info-service';
import { AppLitteralsConfig } from './../../../../providers/literals/app.literals';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-time-slot',
    templateUrl: './time-slot.html',
    styleUrls: ['./time-slot.css']
})

export class TimeSlotComponent {

    @Input('doc')
    doc: any;

    timings = AppLitteralsConfig.timings;

    morningTimings: string[] = this.timings.morning;
    aftrnTimings: string[] = this.timings.aftrn;
    evengTimings: string[] = this.timings.eveng;

    selectedAppointment: any = {};

    constructor(private apInfoService: AppointmentInfoService, private router: Router) { }

    ngOnInit() { }

    chosenAppointment() {
        let doc = this.doc.data[0] || {};
        doc.user = doc.user || {};
        doc.discount_offerings[0] = doc.discount_offerings[0] || {};
        this.selectedAppointment.appointmentDetails = {
            clinician_id: doc.id,
            provider_id: doc.provider_id,
            date: '2018-03-01',
            time: '13:25'
        }
        this.selectedAppointment.docDetails = {
            fee: doc.fee,
            name: doc.user.name,
            id: doc.user.id,
            mobile: doc.user.mobile,
            specialities: doc.specialities,
            discounts: doc.discount_offerings[0].amount,
            docImage: doc.user.profile_pic,
            language: doc.language
        }
        this.apInfoService.setAppointmentDetails(this.selectedAppointment);
        this.router.navigateByUrl('/main/ap_details');
    }
}