import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MessageDetailPage } from '../message-detail/message-detail';

import { Chats } from '../../providers/chats';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  constructor(public navCtrl: NavController, public chats: Chats) {
  }

  openItem(chat) {
    this.navCtrl.push(MessageDetailPage, {
      chat: chat
    })
  }
}
