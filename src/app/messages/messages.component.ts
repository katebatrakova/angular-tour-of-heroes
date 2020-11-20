import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor
    (
    // must be public to bind to it in the template
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

}
