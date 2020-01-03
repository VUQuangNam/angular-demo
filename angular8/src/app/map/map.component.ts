import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
const citys = require('../../assets/JSON/citys.json');
const wards = require('../../assets/JSON/wards.json');
const districts = require('../../assets/JSON/districts.json');
const streets = require('../../assets/JSON/streets.json');

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    cityData: any = citys;
    districtData: any = [];
    wardsData: any = [];
    streetData: any = [];
    // initial center position for the map
    latCentral = 21.00276051083239;
    lngCentral = 105.84241640624998;
    keypress: any;

    markers: IMap[] = [
        {
            lat: null,
            lng: null,
            draggable: true
        }
    ];

    zoom = 8;

    mapClicked($event: MouseEvent) {
        this.markers = [{
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        }];
    }

    markerDragEnd(m: IMap, $event: MouseEvent) {
        this.markers = [{
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true,
        }];
    }

    constructor() { }

    ngOnInit() {
    }
    onSeclet(type: number, value?: any) {
        switch (type) {
            case 1:
                this.districtData = districts.filter(x => x.parent_code === value);
                this.latCentral = this.districtData[0].locations[0][0][0].latitude;
                this.lngCentral = this.districtData[0].locations[0][0][0].longitude;
                this.zoom = 10;
                break;
            case 2:
                this.wardsData = wards.filter(x => x.parent_code === value);
                this.streetData = streets.find(x => x.code === value).streets;
                this.latCentral = this.wardsData[0].locations.latitude;
                this.lngCentral = this.wardsData[0].locations.longitude;
                this.zoom = 12;
                break;
            case 3:
                this.wardsData.forEach(element => {
                    if (element.code === value) {
                        this.markers = [{
                            lat: element.locations.latitude,
                            lng: element.locations.longitude,
                            draggable: true
                        }];
                        this.latCentral = element.locations.latitude;
                        this.lngCentral = element.locations.longitude;
                        this.zoom = 14;
                    }
                });
                break;
            default:
                break;
        }
    }

    onChange($event, index) {
        this.keypress = setTimeout(async () => {
            switch (index) {
                case 1: this.markers[0].lat = $event;
                    // tslint:disable-next-line:align
                    break;
                default: this.markers[0].lng = $event;
            }
        }, 500);
        this.zoom = 14;
    }
}
