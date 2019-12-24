import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadingFileComponent } from './uploading-file/uploading-file.component';
import { MapComponent } from './map/map.component';
import { MaterialComponent } from './material/material.component';
import { JqvMapComponent } from './jqv-map/jqv-map.component';

const routes: Routes = [
    { path: 'uploading', component: UploadingFileComponent },
    { path: 'map', component: MapComponent },
    { path: 'material', component: MaterialComponent },
    { path: 'jqv', component: JqvMapComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
