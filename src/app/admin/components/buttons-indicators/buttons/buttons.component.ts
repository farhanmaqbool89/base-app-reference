import { Component, OnInit } from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
basicBtnSource = false;
raisedBtnSource = false;
strokedBtnSource = false;
flatBtnSource = false;
iconBtnSource = false;
fabBtnSource = false;
fabMiniBtnSource = false;
  constructor(private snackbar: SnackbarService) { }

  ngOnInit() {
  }
  copyText(val: string) {
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
