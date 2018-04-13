import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-appointment-results',
    templateUrl: './appointment-results.html'
})
export class AppointmentResultsComponent implements OnInit {

    imgPrePath: string = '../../assets/img/';
    doctorDetails: Object[] = [
        {
            'name': 'Dr. Harini',
            'img': `${this.imgPrePath}doctor_new.jpg`,
            'sub_img': `${this.imgPrePath}avatar_ma.png`,
            'award_img': `${this.imgPrePath}award1.png`,
            'designation': 'MS - General Surgery,',
            'experience': '15 Years Experience',
            'consultation': 'Telugu, Hindi',
            'landLine_no': '040 123456789',
            'timings': '09:00 PM - 04:00 PM',
            'address': 'Ayyappa Society Main Road, Madhapur, Hyderabad',
            'consultation_fees': '599',
            'discount': '25%'
        },
        {
            'name': 'Dr. Keerthi',
            'img': `${this.imgPrePath}doctor2.jpg`,
            'sub_img': `${this.imgPrePath}avatar_ma.png`,
            'award_img': `${this.imgPrePath}award1.png`,
            'designation': 'MS - General Surgery,',
            'experience': '15 Years Experience',
            'consultation': 'Telugu, Hindi',
            'landLine_no': '040 123456789',
            'timings': '09:00 PM - 04:00 PM',
            'address': 'Ayyappa Society Main Road, Madhapur, Hyderabad',
            'consultation_fees': '599',
            'discount': '25%'
        },
        {
            'name': 'Dr Rammohan MD',
            'img': `${this.imgPrePath}doctor1.jpg`,
            'sub_img': `${this.imgPrePath}avatar_ma.png`,
            'award_img': `${this.imgPrePath}award1.png`,
            'designation': 'MS - General Surgery,',
            'experience': '15 Years Experience',
            'consultation': 'Telugu, Hindi',
            'landLine_no': '040 123456789',
            'timings': '09:00 PM - 04:00 PM',
            'address': 'Ayyappa Society Main Road, Madhapur, Hyderabad',
            'consultation_fees': '599',
            'discount': '25%'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    // to toggle Doctor details
    viewMore(doctor) {
        doctor.showDetails = doctor.showDetails == undefined ? true : !doctor.showDetails;
    }
    //to toggle book appoinments
    bookAppointment(doctor) {
        doctor.isBookAppointment = doctor.isBookAppointment == undefined ? true : !doctor.isBookAppointment;
    }
}
