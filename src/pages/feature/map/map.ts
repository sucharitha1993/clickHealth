import { Component, Input } from '@angular/core';

declare var google: any;

@Component({
    selector: 'app-map',
    templateUrl: './map.html'
})

export class MapComponent {
    @Input('mapData')
    private mapData: any = {};

    constructor() { }

    ngOnInit() {
        const mapData = this.mapData;
        this.displayMap(mapData.lat, mapData.long);
    }
    // to view Map
    displayMap(latitude, longitude, mapId?) {
        var mapOptions = {
            zoom: 8,
            center: { lat: latitude, lng: longitude }
        };
        setTimeout(() => {
            let mapArea = document.getElementById('ap-map');
            let map = new google.maps.Map(mapArea, mapOptions);
            let marker = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: { lat: latitude, lng: longitude }
            });
        }, 500);
    }
}
