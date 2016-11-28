import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  items: any[];

  constructor(public navCtrl: NavController) {
    this.items = [
      {
        name: 'Marty McFly',
        date: 'November 05, 1955',
        avatar: 'assets/img/mcfly.jpg',
        image: 'assets/img/delorean.jpg',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
      }
    ];
  }
}
