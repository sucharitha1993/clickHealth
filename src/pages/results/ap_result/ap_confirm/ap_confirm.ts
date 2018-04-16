import { AppointmentInfoService } from './../../../../providers/services/appointment-info-service';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-ap-confirm',
    templateUrl: './ap_confirm.html'
})

export class ConfirmAppointmentComponent {

    imgPrePath: string = '../../assets/img/';
    doc: any;
    searchParams: any;
    healthSeeker: any;
    bookingDetails: any;

    constructor(private apInfoService: AppointmentInfoService) { }

    ngOnInit() {
        this.healthSeeker = this.apInfoService.getUserDetails() || {};
        this.bookingDetails = this.apInfoService.getbookingDetails() || {};
        let selectedAppointment = this.apInfoService.getAppointmentDetails() || {};
        this.doc = selectedAppointment.docDetails || {};
        this.getSearchParams();
    }

    //to get Search params
    getSearchParams() {
        let args = ['from_date', 'location', 'location_type', 'session', 'symptom', 'to_date']
        this.searchParams = this.apInfoService.getAppointmentSearchParams() || this.apInfoService.getLocalStorageParamsDynamically(args);
    }

    //to print appointment slip
    print(): void {
        let printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
          <html>
            <head>
              <title>Print tab</title>
              <style>
              //........Customized style.......
              </style>
            </head>
        <body onload="window.print();window.close()">${printContents}</body>
          </html>`
        );
        popupWin.document.close();
    }

}