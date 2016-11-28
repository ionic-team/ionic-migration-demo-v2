import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { MessagesPage } from '../pages/messages/messages';
import { FeedPage } from '../pages/feed/feed';
import { TabsPage } from '../pages/tabs/tabs';
import { MessageDetailPage } from '../pages/message-detail/message-detail';

import { Chats } from '../providers/chats';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    MessagesPage,
    FeedPage,
    TabsPage,
    MessageDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    MessagesPage,
    FeedPage,
    TabsPage,
    MessageDetailPage
  ],
  providers: [
    Chats,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
