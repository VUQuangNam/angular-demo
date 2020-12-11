import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { jsPDF } from 'jspdf';
declare var jsPDF: any;
import html2canvas from 'html2canvas';

@Component({
    selector: 'app-export-pdf',
    templateUrl: './export-pdf.component.html',
    styleUrls: ['./export-pdf.component.scss']
})
export class ExportPdfComponent implements OnInit {
    @ViewChild('htmlData', { static: false }) htmlData: ElementRef;

    USERS = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "sincere@april.biz",
            "phone": "1-770-736-8031 x56442"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "shanna@melissa.tv",
            "phone": "010-692-6593 x09125"
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "nathan@yesenia.net",
            "phone": "1-463-123-4447",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "julianne@kory.org",
            "phone": "493-170-9623 x156"
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "lucio@annie.ca",
            "phone": "(254)954-1289"
        },
        {
            "id": 6,
            "name": "Mrs. Dennis",
            "email": "karley@jasper.info",
            "phone": "1-477-935-8478 x6430"
        }
    ];

    constructor() { }

    ngOnInit() {

    }

    public openPDF(): void {
        let DATA = this.htmlData.nativeElement;
        let doc = new jsPDF();
        doc.fromHTML(DATA.innerHTML, 15, 15);
        doc.output('dataurlnewwindow');
    }

    generatePDF() {
        var data = document.getElementById('htmlData');
        html2canvas(data).then(canvas => {
            var imgWidth = 208;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            const contentDataURL = canvas.toDataURL('image/png');
            console.log(contentDataURL);
            let pdf = new jsPDF('p', 'mm', 'a4');
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('newPDF.pdf');
        });
    }

    public downloadPDF(): void {
        let DATA = this.htmlData.nativeElement;
        let doc = new jsPDF();

        let handleElement = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        doc.fromHTML(DATA.innerHTML, 15, 15, {
            'width': 200,
            'elementHandlers': handleElement
        });

        doc.save('angular-demo.pdf');
    }

}
