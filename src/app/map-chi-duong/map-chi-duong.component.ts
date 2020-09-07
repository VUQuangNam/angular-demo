import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-map-chi-duong',
    templateUrl: './map-chi-duong.component.html',
    styleUrls: ['./map-chi-duong.component.scss']
})
export class MapChiDuongComponent implements OnInit {
    public lat = 21.039953;
    public lng = 105.839805;

    public origin: any;
    public destination: any;

    ngOnInit() {
        this.getDirection();
    }

    getDirection() {
        this.origin = { lat: 21.039953, lng: 105.839805 };
        this.destination = { lat: 21.037019, lng: 105.839419 };
    }
}