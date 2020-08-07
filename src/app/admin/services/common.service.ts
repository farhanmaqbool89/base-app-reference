import {EventEmitter, Injectable} from '@angular/core';
import {Subject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  // action: EventEmitter<any> = new EventEmitter();
  themeVersion = new Subject();
  public hero =  'heroooooooooooo';

  // themeVersion() {
  //   //   return this.action;
  //   // }





  constructor() { }

  // public getStudents(): any {
  //   const studentsObservable = new Observable(observer => {
  //     setTimeout(() => {
  //       observer.next(this.students);
  //     }, 1000);
  //   });
  //
  //   return studentsObservable;
  // }

}
