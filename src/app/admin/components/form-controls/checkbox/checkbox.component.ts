import { Component, OnInit } from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  simpleCheckbox = false;
  configurationCheckbox = false;

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
