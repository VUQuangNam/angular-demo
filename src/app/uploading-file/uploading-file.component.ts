import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-uploading-file',
    templateUrl: './uploading-file.component.html'
})
export class UploadingFileComponent {
    fileData: File = null;
    previewUrl: any = [];
    url: any = [];
    uploadedFilePath: string = null;
    avatar: any = null;

    constructor(
        private http: HttpClient
    ) { }

    fileProgress(fileInput: any) {
        if (fileInput.target.files.length > 0) {
            Object.keys(fileInput.target.files).forEach((element, index) => {
                const check = this.url.find(i => fileInput.target.files[element].name === i);
                if (!check) {
                    this.url.push(fileInput.target.files[element].name);
                    this.fileData = fileInput.target.files[element];
                    const reader = new FileReader();
                    reader.onload = (event: any) => {
                        this.previewUrl.push(event.target.result);
                    };
                    // reader.readAsDataURL(event.target.files[index]);
                }
            });
            const mimeType = this.fileData.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }

        }
    }

    // uploading file avatar
    onChangeAvatar(event: any) {
        this.fileData = event.target.files[0];
        const mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = (ev: any) => {
            this.avatar = reader.result;
        };
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
