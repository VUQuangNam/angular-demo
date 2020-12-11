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
import { Map2Component } from './map2/map2.component';
import { ExportPdfComponent } from './export-pdf/export-pdf.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AsyncPipe } from '@angular/common';
import { MessagingService } from './message.service';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

@NgModule({
    declarations: [
        AppComponent,
        UploadingFileComponent,
        MapComponent,
        MaterialComponent,
        UploadingFileExcelComponent,
        BoldManComponent,
        MapChiDuongComponent,
        Map2Component,
        ExportPdfComponent,
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
            apiKey: 'AIzaSyC1X58IGPa0bs6yIgJU0tyHBvYK5CpHWGc',
            libraries: ["places", "geometry"]
        }),
        AgmDirectionModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        AngularFireMessagingModule
    ],
    providers: [GoogleMapsAPIWrapper, MessagingService, AsyncPipe],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class AppModule { }
