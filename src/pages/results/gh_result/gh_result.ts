import { CaroselService } from './../../../providers/services/carosel-service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gh-result',
    templateUrl: './gh_result.html'
})
export class GHResultComponent implements OnInit {


    imgPrePath: string;

    constructor(private CaroselService: CaroselService) {
        this.imgPrePath = '../../assets/img/';
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.CaroselService.getLandingImgCarosel();
    }
}
