import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  private baseUrl = 'http://localhost:3000';

  private getUrl(value: string) {
    return this.baseUrl + value;
  }



  constructor() { }


  public getAllUser() {
    return this.getUrl('/user');

  }
  public getChat(chatID) {
    return this.getUrl('/chats');

  }
  public getAllChat() {
    return this.getUrl('/chats');

  }
  public getUser(userId, user) {
    return this.getUrl('/user');

  }
  public getContacts() {
    return this.getUrl('/fullInfo');

  }
}
