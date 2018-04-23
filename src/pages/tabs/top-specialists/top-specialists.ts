import { CaroselService } from './../../../providers/services/carosel-service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-top-specialists',
    templateUrl: './top-specialists.html'
})
export class TopSearchSpecialists implements OnInit {

    @Input('type')
    type: string;

    imgPrePath: string = '../../assets/img/';

    constructor(public CaroselService: CaroselService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.CaroselService.loadOwlCarousel();
    }

}
