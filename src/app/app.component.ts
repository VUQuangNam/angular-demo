import { Component } from '@angular/core';
import { MessagingService } from './message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'push-notification';
    message;
    constructor(private messagingService: MessagingService) { }
    ngOnInit() {
        this.messagingService.requestPermission();
        this.message = this.messagingService.currentMessage
    }
}
