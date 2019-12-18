import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-uploading-file',
    templateUrl: './uploading-file.component.html',
    styleUrls: ['./uploading-file.component.scss']
})
export class UploadingFileComponent implements OnInit {
    fileData: File = null;
    previewUrl: any = [];
    fileUploadProgress: string = null;
    uploadedFilePath: string = null;

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit() {
    }

    fileProgress(fileInput: any) {
        if (fileInput.target.files.length > 0) {
            Object.keys(fileInput.target.files).forEach(element => {
                this.fileData = fileInput.target.files[element];
            });
            this.preview();
        }

    }

    preview() {
        // Show preview
        const mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }

        const filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
            const reader = new FileReader();
            reader.onload = (event: any) => {
                this.previewUrl.push(event.target.result);
            };
            reader.readAsDataURL(event.target.files[i]);
        }


        // uploading file

        // onSubmit() {
        //     const formData = new FormData();
        //     formData.append('file', this.fileData);
        //     this.http.post('url/to/your/api', formData)
        //         .subscribe(res => {
        //             this.uploadedFilePath = res.data.filePath;
        //             alert('SUCCESS !!');
        //         });
        // }
    }
}
