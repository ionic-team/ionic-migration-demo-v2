import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MessageDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-message-detail',
  templateUrl: 'message-detail.html'
})
export class MessageDetailPage {
  chat: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chat = this.navParams.get('chat');
  }

  ionViewDidLoad() {
    console.log('Hello MessageDetailPage Page');
  }

}
