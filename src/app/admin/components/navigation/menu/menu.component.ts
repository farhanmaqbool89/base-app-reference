import { Component, OnInit } from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
showSourceMenu = false;
showSourceNestedMenu = false;
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
