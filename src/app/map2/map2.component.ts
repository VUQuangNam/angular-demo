import { Component, OnInit } from '@angular/core';
// import { } from "googlemaps";
declare var google: any;

@Component({
    selector: 'app-map2',
    templateUrl: './map2.component.html',
    styleUrls: ['./map2.component.scss']
})
export class Map2Component implements OnInit {
    location: any;
    ngZone: any;

    constructor() { }

    ngOnInit() {
        this.location = {
            latitude: 21.035334,
            longitude: 105.833894,
            zoom: 15,
            marker: {
                lat: 21.035334,
                lng: 105.833894
            }
        }
    }

    getAddress(lat, lng) {
        const geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(lat, lng);
        const request = google.maps.GeocoderRequest = {
            location: latlng
        };
        geocoder.geocode(request, (results, status) => {
            this.ngZone.run(() => {
                const address = results[0].formatted_address;
                return address
            });
        });
    }

}
