import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadingFileComponent } from './uploading-file/uploading-file.component';
import { MapComponent } from './map/map.component';
import { MaterialComponent } from './material/material.component';
import { UploadingFileExcelComponent } from './uploading-file-excel/uploading-file-excel.component';
import { BoldManComponent } from './bold-man/bold-man.component';

const routes: Routes = [
    { path: 'uploading', component: UploadingFileComponent },
    { path: 'map', component: MapComponent },
    { path: 'material', component: MaterialComponent },
    { path: 'excel', component: UploadingFileExcelComponent },
    { path: 'boldman', component: BoldManComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
