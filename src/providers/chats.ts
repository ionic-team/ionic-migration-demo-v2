import { Injectable } from '@angular/core';

@Injectable()
export class Chats {
  chats: any[];

  constructor() {
    this.chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'assets/img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'assets/img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'assets/img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'assets/img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'assets/img/mike.png'
    }];
  }

  all() {
    return this.chats;
  }

  remove(chat) {
    this.chats.splice(this.chats.indexOf(chat), 1);
  }

  get(chatId) {
    for (let chat of this.chats) {
      if (chat.id === parseInt(chatId)) {
        return chat;
      }
    }
    return null;
  }
}
