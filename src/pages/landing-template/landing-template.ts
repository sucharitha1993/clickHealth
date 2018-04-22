import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-landing-template',
    templateUrl: './landing-template.html'
})
export class LandingTemplate implements OnInit {

    imgPrePath: string = '../../assets/img/';
    howItWorks: object[] = [
        { 'iconVal': 'fa fa-calendar', 'label': 'Online Appointment', 'classType': 'how_it_works_in_6' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Doctor Profile', 'classType': 'how_it_works_in_6_r' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Health Packages', 'classType': 'how_it_works_in_6' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Patient Activity Status', 'classType': 'how_it_works_in_6_r' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Patient Communication', 'classType': 'how_it_works_in_6' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Secure Messaging', 'classType': 'how_it_works_in_6_r' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Patient Check-in', 'classType': 'how_it_works_in_6' },
        { 'iconVal': 'fa fa-calendar', 'label': 'Electronic Medical', 'classType': 'how_it_works_in_6_r' }
    ]

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        $('.collapse').on('shown.bs.collapse', function () {
            $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
        }).on('hidden.bs.collapse', function () {
            $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
        });

        $('.panel-heading a').click(function () {
            $('.panel-heading').removeClass('active');
            if (!$(this).closest('.panel').find('.panel-collapse').hasClass('in'))
                $(this).parents('.panel-heading').addClass('active');
        });

        (function () {
            // setup your carousels as you normally would using JS
            // or via data attributes according to the documentation
            // https://getbootstrap.com/javascript/#carousel
            $('#carousel123').carousel({ interval: 2000 });
            $('#carouselABC').carousel({ interval: 3600 });
        }());

        (function () {
            $('.carousel-showmanymoveone .item').each(function () {
                var itemToClone = $(this);

                for (var i = 1; i < 4; i++) {
                    itemToClone = itemToClone.next();

                    // wrap around if at end of item collection
                    if (!itemToClone.length) {
                        itemToClone = $(this).siblings(':first');
                    }

                    // grab item, clone, add marker class, add to collection
                    itemToClone.children(':first-child').clone()
                        .addClass("cloneditem-" + (i))
                        .appendTo($(this));
                }
            });
        }());
    }
}
