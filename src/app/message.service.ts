import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class MessagingService {
    currentMessage = new BehaviorSubject(null);
    constructor(
        private angularFireMessaging: AngularFireMessaging
    ) {
        this.angularFireMessaging.messaging.subscribe(
            (_messaging) => {
                _messaging.onMessage = _messaging.onMessage.bind(_messaging);
                _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
            }
        )
    }
    requestPermission() {
        this.angularFireMessaging.requestToken
            .subscribe(
                (token) => { console.log(token); },
                (error) => { console.error(error); },
            );
    }

    receiveMessage() {
        this.angularFireMessaging.messages.subscribe(
            (payload: any) => {
                const NotificationOptions = {
                    body: payload.notification.body,
                    data: payload.data,
                    icon: payload.notification.icon
                }
                navigator.serviceWorker.getRegistration('').then(registration => {
                    registration.showNotification(payload.notification.title, NotificationOptions);
                });
                this.currentMessage.next(payload);
            })
    }
}