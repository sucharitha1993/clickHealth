import { Injectable } from '@angular/core';

// Avoid name not found warnings
declare var toastr: any;

@Injectable()

export class Toastr {

    constructor() { }

    // Show notification as a tost
    showToastr(message) {
        var shortCutFunction = message.type || "info";
        var messageBody = this.getMessage(message.body || "Something went to worng");
        var title = message.title || "Notification";
        toastr.options = {
            escapeHtml: true,
            preventDuplicates: true,
            progressBar: true,
            tapToDismiss: false,
            newestOnTop: true,
            closeButton: true,
            debug: false,
            positionClass: message.position || 'toast-top-right',
            showDuration: 1000,
            hideDuration: 1000,
            timeOut: 5000,
            extendedTimeOut: 1000,
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
            onclick: (message.url) ? function () { window.open(message.url, '_blank') } : null
        };
        toastr[shortCutFunction](messageBody, title); // Wire up an event handler to a button in the toast, if it exists
    }

    // getting message for toaster 
    getMessage(text) {
        var messageBody = '<div><span>' + text + '</span>&nbsp;</div><div></div>';
        return messageBody;
    };
}