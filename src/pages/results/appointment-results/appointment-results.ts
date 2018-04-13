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
            'discount': '25%',
            'condition_treated': 'A Type of cancer that starts in the cells of the liver. Viral heatitis and liver damage from alcohol or fatty liver are risk factors for liver cancer, An abnormal growth of cells within bone that may be cancerous or cenign...',
            'about_doctor': "is a Consultant General Surgeon, Female Fertility Specialist, Earlier, She worked as Registrar at King's College Hospital, London, UK and Karolinska Institute, Stockholm, Sweden.",
            'procedures_or_surgeries': "Hegde Hospitals has consistently led game-changing developments in healthcare by bringing to the people, the latest innovations in key medical specialities and superspecialities on par with the West. We highlight in this section some of the latest procedures, services and therapies that Hegde hospitals provides, in keeping with the tradition of providing outstanding healthcare of international standards.",
            'awards_and_rewards': "Topper Fellowship in Surgical Gastro at NIMS – 2008",
            'registration':"69690 Andhra Pradesh Medical Council, 2011",
            'surgical': "Conditions that require treatment from a medical or surgical specialist can be addressed at Mercy Personal Physicians at Hegde through a network of Mercy specialists who provide on-site office visits.",
            'exp_details':`<p>15 Years Experience in General Surgeon, Laparoscopic Surgeon, Gastroenterologist</p>
            <ol class="insrurer">
                <li>2014 - 2016 Consultant at Hegde Hospital Madhapur</li>
                <li>2010 - 2014 Fellowship in Surgical Gastroenterology at NIMS</li>
                <li>2006 - 2010 Registrar in Surgical Gastroenterology at NIMS</li>
            </ol>`
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
            'discount': '25%',
            'condition_treated': 'A Type of cancer that starts in the cells of the liver. Viral heatitis and liver damage from alcohol or fatty liver are risk factors for liver cancer, An abnormal growth of cells within bone that may be cancerous or cenign...',
            'about_doctor': "is a Consultant General Surgeon, Female Fertility Specialist, Earlier, She worked as Registrar at King's College Hospital, London, UK and Karolinska Institute, Stockholm, Sweden.",
            'procedures_or_surgeries': "Hegde Hospitals has consistently led game-changing developments in healthcare by bringing to the people, the latest innovations in key medical specialities and superspecialities on par with the West. We highlight in this section some of the latest procedures, services and therapies that Hegde hospitals provides, in keeping with the tradition of providing outstanding healthcare of international standards.",
            'awards_and_rewards': "Topper Fellowship in Surgical Gastro at NIMS – 2008",
            'registration':"69690 Andhra Pradesh Medical Council, 2011",
            'surgical': "Conditions that require treatment from a medical or surgical specialist can be addressed at Mercy Personal Physicians at Hegde through a network of Mercy specialists who provide on-site office visits.",
            'exp_details':`<p>15 Years Experience in General Surgeon, Laparoscopic Surgeon, Gastroenterologist</p>
            <ol class="insrurer">
                <li>2014 - 2016 Consultant at Hegde Hospital Madhapur</li>
                <li>2010 - 2014 Fellowship in Surgical Gastroenterology at NIMS</li>
                <li>2006 - 2010 Registrar in Surgical Gastroenterology at NIMS</li>
            </ol>`
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
            'discount': '25%',
            'condition_treated': 'A Type of cancer that starts in the cells of the liver. Viral heatitis and liver damage from alcohol or fatty liver are risk factors for liver cancer, An abnormal growth of cells within bone that may be cancerous or cenign...',
            'about_doctor': "is a Consultant General Surgeon, Female Fertility Specialist, Earlier, She worked as Registrar at King's College Hospital, London, UK and Karolinska Institute, Stockholm, Sweden.",
            'procedures_or_surgeries': "Hegde Hospitals has consistently led game-changing developments in healthcare by bringing to the people, the latest innovations in key medical specialities and superspecialities on par with the West. We highlight in this section some of the latest procedures, services and therapies that Hegde hospitals provides, in keeping with the tradition of providing outstanding healthcare of international standards.",
            'awards_and_rewards': "Topper Fellowship in Surgical Gastro at NIMS – 2008",
            'registration':"69690 Andhra Pradesh Medical Council, 2011",
            'surgical': "Conditions that require treatment from a medical or surgical specialist can be addressed at Mercy Personal Physicians at Hegde through a network of Mercy specialists who provide on-site office visits.",
            'exp_details':`<p>15 Years Experience in General Surgeon, Laparoscopic Surgeon, Gastroenterologist</p>
            <ol class="insrurer">
                <li>2014 - 2016 Consultant at Hegde Hospital Madhapur</li>
                <li>2010 - 2014 Fellowship in Surgical Gastroenterology at NIMS</li>
                <li>2006 - 2010 Registrar in Surgical Gastroenterology at NIMS</li>
            </ol>`
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
