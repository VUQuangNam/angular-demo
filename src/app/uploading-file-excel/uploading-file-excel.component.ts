import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';


@Component({
    selector: 'app-uploading-file-excel',
    templateUrl: './uploading-file-excel.component.html'
})
export class UploadingFileExcelComponent {
    displayedColumns: string[] = ['STT', 'name', 'gender', 'address', 'SDT'];
    /*name of the excel-file which will be downloaded. */
    fileName = 'ExcelSheet.xlsx';
    storeData: any;
    jsonData: any;
    fileUploaded: File;
    worksheet: any;
    array: any = [];
    uploadedFile(event) {
        this.fileUploaded = event.target.files[0];
        this.readExcel();
    }

    readExcel() {
        const readFile = new FileReader();
        readFile.onload = (e) => {
            this.storeData = readFile.result;
            const data = new Uint8Array(this.storeData);
            const arr = new Array();
            for (let i = 0; i !== data.length; ++i) { arr[i] = String.fromCharCode(data[i]); }
            const bstr = arr.join('');
            const workbook = XLSX.read(bstr, { type: 'binary' });
            const firstSheetName = workbook.SheetNames[0];
            this.worksheet = workbook.Sheets[firstSheetName];
        };
        readFile.readAsArrayBuffer(this.fileUploaded);
    }

    readAsJson = () => {
        this.jsonData = XLSX.utils.sheet_to_json(this.worksheet, { raw: false });
        this.jsonData = JSON.stringify(this.jsonData);
        const data: Blob = new Blob([this.jsonData], { type: 'application/json' });
        this.jsonData = JSON.parse(this.jsonData);
        console.log(this.jsonData);
        // save file
        // FileSaver.saveAs(data, 'JsonFile' + new Date().getTime() + '.json');
    }

    // Export excel file
    exportexcel(): void {
        /* table id is passed over here */
        const element = document.getElementById('excel-table');
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        /* save to file */
        XLSX.writeFile(wb, this.fileName);
    }

    onClick = () => {
        console.log('1');
    }
}
