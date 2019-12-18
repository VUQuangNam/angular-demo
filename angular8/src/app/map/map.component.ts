import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    markers: IMap[] = [];

    lat = 40.730610;
    lng = -73.935242;

    zoom = 8;

    mapClicked($event: MouseEvent) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    }

    markerDragEnd(m: IMap, $event: MouseEvent, i) {
        this.markers[i] = {
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true,
        };
    }

    constructor() { }

    ngOnInit() {
    }

}
