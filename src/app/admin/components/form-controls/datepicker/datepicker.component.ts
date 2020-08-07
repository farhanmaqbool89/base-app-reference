import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  simpleDatePicker = `
  <mat-form-field appearance="outline">
      <mat-label>Choose a date</mat-label>
      <input matInput [matDatepicker]="picker" placeholder="Choose a date">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
  </mat-form-field>
  `;

  date = new FormControl(new Date());
  datestart = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  basicDatePicker = false;
  selectedvalueDatePicker = false;
  constructor(private snackbar: SnackbarService) { }

  ngOnInit() {
  }

  copyText(val: string) {
    console.log(val);

    const codeCopy = document.createElement('textarea');
    codeCopy.value = val.trim();
    document.body.appendChild(codeCopy);
    codeCopy.focus();
    codeCopy.select();
    document.execCommand('copy');
    document.body.removeChild(codeCopy);
    codeCopy.value = val
    if (codeCopy.value === val) {
      this.snackbar.snackbarMessage('success-snackbar', 'Copied Successfully', 1);


    }
  }
}
