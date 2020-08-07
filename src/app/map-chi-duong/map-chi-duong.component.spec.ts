import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapChiDuongComponent } from './map-chi-duong.component';

describe('MapChiDuongComponent', () => {
  let component: MapChiDuongComponent;
  let fixture: ComponentFixture<MapChiDuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapChiDuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapChiDuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
