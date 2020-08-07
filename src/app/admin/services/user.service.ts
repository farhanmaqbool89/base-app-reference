import { Injectable } from '@angular/core';
import {EndpointsService} from "../../endpoints.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
data: any;
  constructor(private endpoint: EndpointsService,
              private httpClient: HttpClient) { }

  getUserInfo() {

    return Observable.create(observer => {
        this.httpClient.get(this.endpoint.getContacts())
        //   .finally(() => observer.complete())
            .subscribe(res => {
                  this.data = res;
                  console.log('contacts', this.data)
                  observer.next(this.data);
                  // console.log("Data by id from Service :", this.data);
                },
                error => {
                  console.log(error);
                });

    });

  }

}
