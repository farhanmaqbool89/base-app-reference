import { Component, OnInit } from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";
import {
  basicSelectHTML,
  basicSelectTS,
  formSelectHTML, formSelectTS,
  twoWaySelectBindingHTML,
  twoWaySelectBindingTS
} from "../../source-data";

export interface Food {
  value: string;
  viewValue: string;
}
export interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  selected = 'option2';
  basicSelectView = false;
  twoWayValue = false;
  formInSelect = false;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  selectedValue: string;
  selectedCar: string;

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];
  constructor(private snackbar: SnackbarService) {
  }
  value;

  htmlValue = '';
  basicSelectHTML = basicSelectHTML;
  basicSelectTS = basicSelectTS;
  twoWaySelectBindingHTML = twoWaySelectBindingHTML;
  twoWaySelectBindingTS = twoWaySelectBindingTS;
  formSelectHTML = formSelectHTML;
  formSelectTS = formSelectTS;



  ngOnInit() {
  }

  // convert(val: string){
  //   console.log('html value', val)
  //   this.htmlValue = val.replace('_ngcontent-c10=""','');
  // }
  copyText(val: string) {
    console.log(val);
    this.value = val;
    const codeCopy = document.createElement('textarea');
    codeCopy.value = val.trim();
    document.body.appendChild(codeCopy);
    codeCopy.focus();
    codeCopy.select();
    document.execCommand('copy');
    document.body.removeChild(codeCopy);
    codeCopy.value = val;
    if (codeCopy.value === val) {
      this.snackbar.snackbarMessage('success-snackbar', 'Copied Successfully', 1);


    }
  }

}
