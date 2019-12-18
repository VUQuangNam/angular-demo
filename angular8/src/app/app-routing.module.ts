import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import component
import { UploadingFileComponent } from './uploading-file/uploading-file.component';


const routes: Routes = [
    { path: 'uploading', component: UploadingFileComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
