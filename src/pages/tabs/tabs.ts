import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { MessagesPage } from '../messages/messages';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FeedPage;
  tab2Root: any = MessagesPage;
  tab3Root: any = ProfilePage;

  constructor() {

  }
}
