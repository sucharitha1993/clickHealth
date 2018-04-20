import { SharingService } from './../../../../providers/services/sharing-service';
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
    address: any;

    constructor(private sharingService: SharingService, private apInfoService: AppointmentInfoService) { }

    ngOnInit() {
        this.healthSeeker = this.apInfoService.getUserDetails() || this.sharingService.getParams('healthSeeker') || {};
        this.bookingDetails = this.apInfoService.getbookingDetails() || this.sharingService.getParams('bookedAppointment') || {};
        let selectedAppointment = this.apInfoService.getAppointmentDetails() || this.sharingService.getParams('selectedAppointment') || {};
        this.doc = selectedAppointment.docDetails || {};
        selectedAppointment.location = selectedAppointment.location;
        this.address = selectedAppointment.location.address;
        this.searchParams = this.apInfoService.getAppointmentSearchParams() || this.sharingService.getParams('appointments');        
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