import { Component, Input } from '@angular/core';

declare var google: any;

@Component({
    selector: 'app-map',
    templateUrl: './map.html'
})

export class MapComponent {
    @Input('mapData')
    public mapData: any = {};

    constructor() { }

    ngOnInit() {
        const mapData = this.mapData;
        this.displayMap(mapData.lat, mapData.long);
    }
    // to view Map
    displayMap(latitude, longitude, mapId?) {
        var mapOptions = {
            zoom: 16,
            center: { lat: parseFloat(latitude), lng: parseFloat(longitude) }
        };
        setTimeout(() => {
            let mapArea = document.getElementById('ap-map');
            let map = new google.maps.Map(mapArea, mapOptions);
            let marker = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: { lat: parseFloat(latitude), lng: parseFloat(longitude) }
            });
        }, 500);
    }
}
