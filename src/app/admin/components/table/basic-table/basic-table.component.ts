import { Component, OnInit } from '@angular/core';
import {actionTable, defaultTable, hoverTable, stripdTable} from "../../source-data";
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
defaultTable = defaultTable;
stripdTable = stripdTable;
hoverTable = hoverTable;
actionTable = actionTable;

defaultTableView = false;
stripdTableView = false;
hoverTableView = false;
actionTableView = false;




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
    codeCopy.value = val;
    if (codeCopy.value === val) {
      this.snackbar.snackbarMessage('success-snackbar', 'Copied Successfully', 1);


    }

  }


}
