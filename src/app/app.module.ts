import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {
    MatAutocompleteModule, MatCheckboxModule,
    MatDatepickerModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatMenuModule, MatNativeDateModule,
    MatPaginatorModule, MatRadioModule,
    MatSelectModule, MatSlideToggleModule,
    MatSortModule, MatTableModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmDirectionModule } from 'agm-direction';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoldManComponent } from './bold-man/bold-man.component';
import { ExportPdfComponent } from './export-pdf/export-pdf.component';
import { MapChiDuongComponent } from './map-chi-duong/map-chi-duong.component';
import { MapComponent } from './map/map.component';
import { Map2Component } from './map2/map2.component';
import { MaterialComponent } from './material/material.component';
import { MessagingService } from './message.service';
import { UploadingFileExcelComponent } from './uploading-file-excel/uploading-file-excel.component';
import { UploadingFileComponent } from './uploading-file/uploading-file.component';

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
