import { DatePipe } from '@angular/common';
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
    searchParams: any = {};
    selectedAppointment: any = {
        appointmentDetails: {},
        docDetails: {},
        loaction: {}
    }
    selectedSlots: any = {
        date: '',
        time: ''
    }
    public weekDays: any = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    public monthsList: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    constructor(private datePipe: DatePipe, private apInfoService: AppointmentInfoService, private router: Router) { }

    ngOnInit() {
        this.doc = this.doc || {};
        let vacations = this.doc.vacations || [];
        let args = ['from_date', 'location', 'location_type', 'session', 'symptom', 'to_date']
        this.searchParams = this.apInfoService.getAppointmentSearchParams() || this.apInfoService.getLocalStorageParamsDynamically(args) || {};
        this.doc.vacationLists = this.getVacationsDateList(vacations);
    }

    chosenAppointment(selectedTime, doctor) {
        this.selectedSlots.time = selectedTime;        
        let doc = this.doc || {};
        doc.user = doc.user || {};
        doc.discount_offerings[0] = doc.discount_offerings[0] || {};
        this.selectedAppointment.appointmentDetails = {
            clinician_id: doc.id,
            provider_id: doc.provider_id,
            date: this.selectedSlots.date,
            time: selectedTime
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
    }

    getVacationsDateList(vacList) {
        let vacationList: any = []
        vacList.forEach(element => {
            var dates = [],
                currentDate = new Date(element[0]),
                addDays = function (days) {
                    var date = new Date(this.valueOf());
                    date.setDate(date.getDate() + days);
                    return date;
                };
            while (currentDate <= (new Date(element[1]))) {
                vacationList.push(currentDate);
                currentDate = addDays.call(currentDate, 1);
            }
        });
        let dateRange: any = this.getDateRange();

        vacationList.forEach(date => {
            dateRange = dateRange.filter((i) => {
                return i.toDateString() !== date.toDateString();
            })
        });

        dateRange.forEach(obj => {
            obj.activeClass = false;
            obj.exactDate = obj;
            obj.date = obj.getDate();
            obj.day = obj.getDay();
            obj.month = obj.getMonth();
        });
        return dateRange;
    }

    getDateRange() {
        this.searchParams.from_date = this.datePipe.transform(this.searchParams.from_date, 'yyyy-MM-dd');
        this.searchParams.to_date = this.datePipe.transform(this.searchParams.to_date, 'yyyy-MM-dd');
        var dates = [],
            currentDate = new Date(this.searchParams.from_date),
            addDays = function (days) {
                var date = new Date(this.valueOf());
                date.setDate(date.getDate() + days);
                return date;
            };
        while (currentDate <= (new Date(this.searchParams.to_date))) {
            dates.push(currentDate);
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    }

    dateSelectEvent(item, index, list?) {
        list.daysList = list.daysList || {};
        this.selectedSlots.date = item;
        this.selectedSlots.time = null;
        list.timings.forEach(element => {
            if (this.weekDays[item.day] == element.day) {
                list.daysList.morning = [];
                list.daysList.afternoon = [];
                list.daysList.evening = [];
                list.daysList.night = [];
                element.morning.forEach(morningObj => {
                    morningObj.forEach(times => {
                        let dateToday = new Date();
                        let splitTime = times.split(":");
                        dateToday.setHours(splitTime[0]);
                        dateToday.setMinutes(splitTime[1]);
                        dateToday.setSeconds(splitTime[2]);
                        list.daysList.morning.push(dateToday);
                    });
                });
                element.afternoon.forEach(afternoonObj => {
                    afternoonObj.forEach(times => {
                        let dateToday = new Date();
                        let splitTime = times.split(":");
                        dateToday.setHours(splitTime[0]);
                        dateToday.setMinutes(splitTime[1]);
                        dateToday.setSeconds(splitTime[2]);
                        list.daysList.afternoon.push(dateToday);
                    });
                });
                element.evening.forEach(eveningObj => {
                    eveningObj.forEach(times => {
                        let dateToday = new Date();
                        let splitTime = times.split(":");
                        dateToday.setHours(splitTime[0]);
                        dateToday.setMinutes(splitTime[1]);
                        dateToday.setSeconds(splitTime[2]);
                        list.daysList.evening.push(dateToday);
                    });
                });
                element.night.forEach(nightObj => {
                    nightObj.forEach(times => {
                        let dateToday = new Date();
                        let splitTime = times.split(":");
                        dateToday.setHours(splitTime[0]);
                        dateToday.setMinutes(splitTime[1]);
                        dateToday.setSeconds(splitTime[2]);
                        list.daysList.night.push(dateToday);
                    });
                });
            }
        });

        index.forEach(element => {
            element.activeClass = false;
        });
        item.activeClass = true;
    }

    navigateToApDetails() {
        this.router.navigateByUrl('/main/ap_details');
    }

}