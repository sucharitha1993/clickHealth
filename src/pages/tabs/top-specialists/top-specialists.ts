import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-top-specialists',
    templateUrl: './top-specialists.html'
})
export class TopSearchSpecialists implements OnInit {

    @Input('type')
    type: string;

    imgPrePath: string = '../../assets/img/';

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.loadOwlCarousel();
    }

    //to load Carousel css
    loadOwlCarousel() {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            dot: false,

            navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
    }
}
