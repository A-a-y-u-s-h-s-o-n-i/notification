import {Component, OnInit} from '@angular/core';
import {MessagingService} from './messaging.service';
import {decoratorArgument} from 'codelyzer/util/astQuery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Push Notification';

  message;

  constructor(private messagingService: MessagingService) { }

  userId = this.messagingService.requestPermission('user');

  ngOnInit() {

    const userId = 'user';
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }
}
