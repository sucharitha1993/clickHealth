import { Injectable } from '@angular/core';

// Avoid name not found warnings
declare var toastr: any;

@Injectable()

export class Toastr {

    constructor() { }

    // Show notification as a tost
    showToastr(message) {
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "100",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "show",
            "hideMethod": "hide"
        };
        toastr.error(message);
    };


}