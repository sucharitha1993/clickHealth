import { Component, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: 'hc-modal',
    templateUrl: './hc-modal.html'
})

export class HCModalComponent {

    // @Input('hc')
    // hc: Object;
    public imgPrePath: string = '../../assets/img/';

    constructor() { }

    ngOnInit() { }

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

    closeModal() {
        console.log('func called');
        //$('#hcmodal').hide();
    }
}