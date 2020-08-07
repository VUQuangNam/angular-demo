import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-map-chi-duong',
    templateUrl: './map-chi-duong.component.html',
    styleUrls: ['./map-chi-duong.component.scss']
})
export class MapChiDuongComponent implements OnInit {
    public lat = 24.799448;
    public lng = 120.979021;

    public origin: any;
    public destination: any;

    ngOnInit() {
        this.getDirection();
    }

    getDirection() {
        this.origin = { lat: 24.799448, lng: 120.979021 };
        this.destination = { lat: 24.799524, lng: 120.975017 };

        // Location within a string
        // this.origin = 'Taipei Main Station';
        // this.destination = 'Taiwan Presidential Office';
    }
}