import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {

    constructor() { }

    showLoader() {
        document.getElementById("loader").style.display = "block";
    }

    hideLoader() {
        document.getElementById("loader").style.display = "none";
    }
}