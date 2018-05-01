import { CaroselService } from './../../../../providers/services/carosel-service';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: 'hc-modal',
    templateUrl: './hc-modal.html'
})

export class HCModalComponent {

    @Input('hospitals')
    hospitals: any = [];
    public imgPrePath: string = '../../assets/img/';

    constructor(public router: Router, public CaroselService: CaroselService) { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.CaroselService.loadUnLoopedOwlCarosel();
    }

    closeModal() {
        this.router.navigateByUrl('/main/hc_details');
    }
}