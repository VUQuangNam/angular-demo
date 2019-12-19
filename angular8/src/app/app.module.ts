import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import {
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule
} from '@angular/material';

// component
import { UploadingFileComponent } from './uploading-file/uploading-file.component';
import { MapComponent } from './map/map.component';
import { MaterialComponent } from './material/material.component';



@NgModule({
    declarations: [
        AppComponent,
        UploadingFileComponent,
        MapComponent,
        MaterialComponent
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
        AgmCoreModule.forRoot({
            // please get your own API key here:
            // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
            apiKey: ''
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
