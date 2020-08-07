import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import {
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
} from '@angular/material';

// component
import { UploadingFileComponent } from './uploading-file/uploading-file.component';
import { MapComponent } from './map/map.component';
import { MaterialComponent } from './material/material.component';
import { UploadingFileExcelComponent } from './uploading-file-excel/uploading-file-excel.component';
import { BoldManComponent } from './bold-man/bold-man.component';
import { MapChiDuongComponent } from './map-chi-duong/map-chi-duong.component';

@NgModule({
    declarations: [
        AppComponent,
        UploadingFileComponent,
        MapComponent,
        MaterialComponent,
        UploadingFileExcelComponent,
        BoldManComponent,
        MapChiDuongComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatAutocompleteModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMenuModule,
        MatIconModule,
        MatSelectModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDUNFuTjXmVxs8bcr5xf8ZPPnBejsOURSM'
        }),
        AgmDirectionModule
    ],
    providers: [GoogleMapsAPIWrapper],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class AppModule { }
