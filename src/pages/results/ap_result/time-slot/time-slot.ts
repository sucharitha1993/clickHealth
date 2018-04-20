import { SharingService } from './../../../../providers/services/sharing-service';
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
    imgPrePath: string = '../../assets/img/';
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
    public weekDays: any = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    public monthsList: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    constructor(private sharingService: SharingService, private datePipe: DatePipe, private apInfoService: AppointmentInfoService, private router: Router) { }

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
            language: doc.language,
            first_fee: doc.first_fee
        }
        this.apInfoService.setAppointmentDetails(this.selectedAppointment);
        this.sharingService.setParams('selectedAppointment', this.selectedAppointment);
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
        //var unAvailableList = [];
        
        // for(let i=0;i<list.pending_appointments.length;i++) {
        //     if(new Date(item.exactDate).getTime() == new Date(list.pending_appointments[i].from_timestamp).getTime()) {
        //         unAvailableList.push(list.pending_appointments[i]);
        //     }
            
        // }
        // for(let i=0;i<list.confirmed_appointments.length;i++) {
        //     if(new Date(item.exactDate).getTime() == new Date(list.confirmed_appointments[i].from_timestamp).getTime()) {
        //         unAvailableList.push(list.confirmed_appointments[i]);
        //     }
        // }
        
        
        list.daysList = list.daysList || {};
        this.selectedSlots.date = item;
        this.selectedSlots.time = null;
        var intervals = [];
        var timeSession: any;
        
        for(var j=0;j<list.work_timings.length;j++) {
            var element;
            if (item.day == j) {
                intervals = this.getIntervals(list.work_timings[j][0],list.work_timings[j][1]);
                timeSession = this.getTimeSessionBasedData(intervals);
            }
        }
        index.forEach(element => {
            element.activeClass = false;
        });
        item.activeClass = true;
    }

    navigateToApDetails() {
        this.router.navigateByUrl('/main/ap_details');
    }
    getIntervals(fromTime,toTime) {
        var duration = 30;
        fromTime = this.convertTimeToInt(fromTime);
        toTime = this.convertTimeToInt(toTime);
        var intervals = [];
        while(fromTime < toTime){
            intervals.push(fromTime.toTimeString().substring(0,5));
            fromTime.setMinutes(fromTime.getMinutes() + duration);
        }
        return intervals;
      
    }
    convertTimeToInt(date_time) {
        var dt = new Date();
        dt.setHours(date_time.substring(0,2));
        dt.setMinutes(date_time.substring(3,5));
        return dt;
    }

    getTimeSessionBasedData(intervals) {
        var timeSession = {
            morning: [],
            afternoon: [],
            evening: [],
            night: []
        };
        for(var i=0;i<intervals.length;i++) {
           var currentHour =  parseInt(intervals[i].substring(0,2));
           if (currentHour < 12) {
            timeSession.morning.push(intervals[i]);
                
          } else if (currentHour < 17) {
            timeSession.afternoon.push(intervals[i]);
          } else if (currentHour < 21) {
            timeSession.evening.push(intervals[i]);
          } else {
            timeSession.night.push(intervals[i]);
          }
        }
        return timeSession;
    }

}