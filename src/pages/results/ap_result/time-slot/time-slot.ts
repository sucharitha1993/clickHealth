import { Toastr } from './../../../../providers/services/toastr.service';
import { LoaderService } from './../../../../providers/services/loader-service';
import { AppointmentDataService } from './../../../../providers/services/appointments/appointment-data.service';
import { CaroselService } from './../../../../providers/services/carosel-service';
import { SharingService } from './../../../../providers/services/sharing-service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AppointmentInfoService } from './../../../../providers/services/appointments/appointment-info-service';
import { AppLitteralsConfig } from './../../../../providers/literals/app.literals';
import { Component, Input, EventEmitter, Output } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-time-slot',
    templateUrl: './time-slot.html',
    styleUrls: ['./time-slot.css']
})

export class TimeSlotComponent {

    @Input('doc')
    doc: any;
    @Output('isAuthenticated')
    isAuthenticated: EventEmitter<boolean> = new EventEmitter<boolean>();

    imgPrePath: string = '../../assets/img/';
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
    public timeSession: any;

    public carouselConfig = {
        grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
        slide: 2,
        speed: 400,
        interval: 50000,
        point: {
            visible: false
        },
        loop: true,
        touch: true
    }

    constructor(public toastr: Toastr, public loader: LoaderService, public apDataService: AppointmentDataService, public CaroselService: CaroselService, private sharingService: SharingService, private datePipe: DatePipe, private apInfoService: AppointmentInfoService, private router: Router) { }

    ngOnInit() {
        this.doc = this.doc || {};
        let vacations = this.doc.timeconfigure || [];
        //let args = ['from_date', 'location', 'location_type', 'session', 'symptom', 'to_date']
        this.searchParams = this.apInfoService.getAppointmentSearchParams() || this.sharingService.getParams('appointments') || {};
        this.doc.vacationLists = this.getVacationsDateList(vacations);
    }

    ngAfterViewInit() {
        this.CaroselService.loadUnLoopedOwlCarosel();
    }

    chosenAppointment(selectedTime, doctor) {
        this.selectedSlots.time = selectedTime;

        let doc = this.doc || {};
        doc.user = doc.user || {};
        doc.discount_offerings[0] = doc.discount_offerings[0] || {};
        doc.hospital[0] = doc.hospital[0] || {};
        doc.hospital[0].location = doc.hospital[0].location || {};
        doc.specialities[0] = doc.specialities[0] || {};
        this.selectedAppointment.appointmentDetails = {
            provider_name: doc.hospital[0].name,
            clinician_id: doc.id,
            provider_id: doc.hospital[0].id,
            date: this.datePipe.transform(this.selectedSlots.date.exactDate, 'yyyy-MM-dd'),
            time: selectedTime,
            seeker_id: '',
            speciality_id: doc.specialities[0].id,
            fee: doc.fee,
        }
        this.selectedAppointment.docDetails = {
            provider_name: doc.hospital[0].name,
            fee: doc.fee,
            name: doc.user.name,
            id: doc.user.id,
            mobile: doc.user.mobile,
            specialities: doc.specialities,
            discounts: doc.discount_offerings[0].amount,
            docImage: doc.user.profile_pic,
            languages: doc.languages,
            first_fee: doc.first_fee
        }
        this.selectedAppointment.location = {
            lat: doc.hospital[0].location.lat,
            long: doc.hospital[0].location.long,
            address: doc.hospital[0].name + ', ' + doc.hospital[0].location.landmark,
            pincode: doc.hospital[0].location.pincode
        }
        this.apInfoService.setAppointmentDetails(this.selectedAppointment);
        this.sharingService.setParams('selectedAppointment', this.selectedAppointment);
    }

    getVacationsDateList(vacList) {
        var carousalDates = [];
        var dateObj: any = {};
        for (let i = 0; i < vacList.length; i++) {
            dateObj = {};
            dateObj.date = vacList[i].date;
            var dateExists = false;
            for (let j = 0; j < carousalDates.length; j++) {
                if (vacList[i].date == carousalDates[j].date) {
                    dateExists = true;
                }
            }
            if (!dateExists) {
                carousalDates.push(dateObj);
            }

        }
        for (let i = 0; i < carousalDates.length; i++) {
            carousalDates[i].activeClass = false;
            carousalDates[i].exactDate = new Date(carousalDates[i].date);
            carousalDates[i].date =carousalDates[i].exactDate.getDate();
            carousalDates[i].day = carousalDates[i].exactDate.getDay();
            carousalDates[i].month = carousalDates[i].exactDate.getMonth();

        }
        return carousalDates;
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
        var times = this.doc.timeconfigure;
        var unAvailableList = [];
        for (let i = 0; i < times.length; i++) {
            let selectedDate = this.datePipe.transform(item.exactDate, 'yyyy-MM-dd');
            if (selectedDate == times[i].date) {
                unAvailableList.push(times[i]);
            }

        }
        var unAvailableListIntervals = [];
        for (let i = 0; i < unAvailableList.length; i++) {
            unAvailableListIntervals.push(unAvailableList[i].time_slot.substring(0, 5));
        }

        list.daysList = list.daysList || {};
        this.selectedSlots.date = item;
        this.selectedSlots.time = null;
        var finalIntervals = [];

        finalIntervals = unAvailableListIntervals;
        this.timeSession = this.getTimeSessionBasedData(finalIntervals);
        index.forEach(element => {
            element.activeClass = false;
        });
        item.activeClass = true;
    }

    navigateToApDetails() {
        this.loader.showLoader();
        this.apDataService.checkAuthentication()
            .subscribe(res => {
                this.loader.hideLoader();
                this.isAuthenticated.emit(res);   
                this.sharingService.setParams('isAuthenticated',res);             
                if (res.authenticated) {
                    this.selectedAppointment.appointmentDetails.seeker_id = res.pk;
                    this.bookAppointment();
                }
                else
                    this.router.navigateByUrl('/main/ap_details');
            },
            error => {
                this.loader.hideLoader();
                this.toastr.showToastr('Authentication Failed');
            })
    }

    //To book Appointment for the authenticated user
    bookAppointment() {
        this.loader.showLoader();
        let selectedAppointment = this.apInfoService.getAppointmentDetails() || this.sharingService.getParams('selectedAppointment') || {};
        let obj = selectedAppointment.appointmentDetails;
        this.apDataService.bookAppointment(obj)
            .subscribe(res => {
                this.loader.hideLoader();
                if (res.status) {
                    //this.apInfoService.setbookingDetails(res.data);
                    //this.sharingService.setParams('bookedAppointment', res.data);
                    this.sharingService.setParams('bookingId', res.booking_id);
                    this.router.navigateByUrl('/main/ap_confirm')
                } else {
                    this.toastr.showToastr('Unable to Book Appointment');
                }
            },
            error => {
                this.loader.hideLoader();
                this.toastr.showToastr('Unable to Book Appointment');
            })
    }

    getIntervals(fromTime, toTime) {
        var duration = 30;
        fromTime = this.convertTimeToInt(fromTime);
        toTime = this.convertTimeToInt(toTime);
        var intervals = [];
        while (fromTime < toTime) {
            intervals.push(fromTime.toTimeString().substring(0, 5));
            fromTime.setMinutes(fromTime.getMinutes() + duration);
        }
        return intervals;

    }
    convertTimeToInt(date_time) {
        var dt = new Date();
        dt.setHours(date_time.substring(0, 2));
        dt.setMinutes(date_time.substring(3, 5));
        return dt;
    }

    getTimeSessionBasedData(intervals) {
        var timeSession = {
            morning: [],
            afternoon: [],
            evening: []
        };
        for (var i = 0; i < intervals.length; i++) {
            var currentHour = parseInt(intervals[i].substring(0, 2));
            if (currentHour < 12) {
                timeSession.morning.push(intervals[i]);
            } else if (currentHour < 17) {
                timeSession.afternoon.push(intervals[i]);
            } else {
                timeSession.evening.push(intervals[i]);
            }
        }
        return timeSession;
    }

}