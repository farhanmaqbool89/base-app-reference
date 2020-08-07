import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  private baseUrl = 'http://localhost:3000';

  private getUrl(value: string) {
    return this.baseUrl + value;
  }
  // allData;

  constructor(private http: HttpClient) {
  //     this.http.get('../assets/contacts.json').subscribe((res: any) => {
  //       console.log(`ConfigService [readConfiguration] data = [${JSON.stringify(res.user)}]`);
  // this.allData = res;
  //
  //     }, (error) => {
  //       console.log(`ConfigService [readConfiguration] error occurred [${JSON.stringify(error)}]`);
  //     });
  }




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
